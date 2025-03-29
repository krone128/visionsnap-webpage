import express, { Request, Response } from 'express';
import { AppDataSource } from '../config/database';
import { Blog } from '../entities/Blog';
import { User } from '../entities/User';
import { authenticateToken } from '../middleware/auth';
import { uploadToS3 } from '../utils/s3';
import multer from 'multer';

const router = express.Router();
const blogRepository = AppDataSource.getRepository(Blog);
const userRepository = AppDataSource.getRepository(User);

// Configure multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Get all published blog posts
router.get('/', async (req: Request, res: Response) => {
  try {
    console.log('Fetching blog posts...');
    const posts = await blogRepository.find({
      where: { published: true },
      relations: ['author'],
      order: { createdAt: 'DESC' }
    });
    console.log(`Found ${posts.length} blog posts`);
    if (posts.length === 0) {
      return res.json([]); // Return empty array instead of error
    }
    res.json(posts);
  } catch (error) {
    console.error('Error in GET /api/blog:', error);
    res.status(500).json({ 
      message: 'Error fetching blog posts',
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
  }
});

// Get single blog post
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const post = await blogRepository.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ['author']
    });
    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog post' });
  }
});

// Create new blog post (protected)
router.post('/', authenticateToken, upload.single('image'), async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const user = await userRepository.findOne({ where: { id: req.user.id } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let imageUrl: string | undefined;
    if (req.file) {
      imageUrl = await uploadToS3(req.file);
    }

    const post = blogRepository.create({
      title: req.body.title,
      content: req.body.content,
      imageUrl,
      videoUrl: req.body.videoUrl || undefined,
      published: req.body.published === 'true',
      author: user
    });

    await blogRepository.save(post);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog post' });
  }
});

// Update blog post (protected)
router.put('/:id', authenticateToken, upload.single('image'), async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const post = await blogRepository.findOne({
      where: { id: parseInt(req.params.id) },
      relations: ['author']
    });

    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    // Check if user is author or admin
    if (post.author.id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to edit this post' });
    }

    let imageUrl = post.imageUrl;
    if (req.file) {
      imageUrl = await uploadToS3(req.file);
    }

    blogRepository.merge(post, {
      title: req.body.title,
      content: req.body.content,
      imageUrl,
      videoUrl: req.body.videoUrl || undefined,
      published: req.body.published === 'true'
    });

    await blogRepository.save(post);
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Error updating blog post' });
  }
});

// Delete blog post (admin only)
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete posts' });
    }

    const post = await blogRepository.findOne({
      where: { id: parseInt(req.params.id) }
    });

    if (!post) {
      return res.status(404).json({ message: 'Blog post not found' });
    }

    await blogRepository.remove(post);
    res.json({ message: 'Blog post deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog post' });
  }
});

export default router; 