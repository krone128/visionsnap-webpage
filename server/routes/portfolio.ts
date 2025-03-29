import express, { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Portfolio } from '../entities/Portfolio';
import { authenticateToken } from '../middleware/auth';
import { uploadToS3 } from '../utils/s3';
import multer from 'multer';

const router = express.Router();
const portfolioRepository = AppDataSource.getRepository(Portfolio);

// Configure multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

// Get all portfolio items
router.get('/', async (req: Request, res: Response) => {
  try {
    const items = await portfolioRepository.find({
      order: { createdAt: 'DESC' }
    });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio items' });
  }
});

// Get single portfolio item
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const item = await portfolioRepository.findOne({
      where: { id: parseInt(req.params.id) }
    });
    if (!item) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching portfolio item' });
  }
});

// Create new portfolio item (admin only)
router.post('/', authenticateToken, upload.single('image'), async (req: Request, res: Response) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to create portfolio items' });
    }

    let imageUrl: string | undefined;
    if (req.file) {
      imageUrl = await uploadToS3(req.file);
    }

    const item = portfolioRepository.create({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      imageUrl,
      videoUrl: req.body.videoUrl || undefined,
      demoUrl: req.body.demoUrl || undefined,
      technologies: req.body.technologies ? JSON.parse(req.body.technologies) : [],
      metadata: req.body.metadata ? JSON.parse(req.body.metadata) : undefined
    });

    await portfolioRepository.save(item);
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error creating portfolio item' });
  }
});

// Update portfolio item (admin only)
router.put('/:id', authenticateToken, upload.single('image'), async (req: Request, res: Response) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to update portfolio items' });
    }

    const item = await portfolioRepository.findOne({
      where: { id: parseInt(req.params.id) }
    });

    if (!item) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }

    let imageUrl = item.imageUrl;
    if (req.file) {
      imageUrl = await uploadToS3(req.file);
    }

    portfolioRepository.merge(item, {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      imageUrl,
      videoUrl: req.body.videoUrl || undefined,
      demoUrl: req.body.demoUrl || undefined,
      technologies: req.body.technologies ? JSON.parse(req.body.technologies) : item.technologies,
      metadata: req.body.metadata ? JSON.parse(req.body.metadata) : item.metadata
    });

    await portfolioRepository.save(item);
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating portfolio item' });
  }
});

// Delete portfolio item (admin only)
router.delete('/:id', authenticateToken, async (req: Request, res: Response) => {
  try {
    if (!req.user || req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to delete portfolio items' });
    }

    const item = await portfolioRepository.findOne({
      where: { id: parseInt(req.params.id) }
    });

    if (!item) {
      return res.status(404).json({ message: 'Portfolio item not found' });
    }

    await portfolioRepository.remove(item);
    res.json({ message: 'Portfolio item deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting portfolio item' });
  }
});

export default router; 