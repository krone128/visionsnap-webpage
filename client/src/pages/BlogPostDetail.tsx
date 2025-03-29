import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { 
  pageTransitionVariant, 
  headerTransitionVariant, 
  descriptionTransitionVariant, 
  cardTransitionVariant
} from '../styles/animations';
import '../styles/animations.css';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  videoUrl?: string;
  author: string;
  createdAt: string;
}

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/${id}`);
        setPost(response.data);
      } catch (err) {
        setError('Failed to fetch blog post');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token');

      await axios.delete(`http://localhost:5000/api/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      navigate('/blog');
    } catch (err) {
      setError('Failed to delete blog post');
      console.error('Error deleting blog post:', err);
    }
  };

  if (loading) {
    return (
      <div className="flex-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container py-12">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-red-700">{error || 'Post not found'}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container py-12"
    >
      <motion.div 
        variants={headerTransitionVariant}
        initial="initial"
        animate="animate"
        className="flex justify-between items-center mb-8"
      >
        <Link to="/blog" className="text-yellow-400 hover:text-yellow-300">
          ← Back to Blog
        </Link>
        {user && (user.role === 'admin' || user.role === 'editor') && (
          <div className="flex space-x-4">
            <Link
              to={`/blog/edit/${id}`}
              className="btn btn-secondary"
            >
              Edit Post
            </Link>
            <button
              onClick={handleDelete}
              className="btn btn-danger"
            >
              Delete Post
            </button>
          </div>
        )}
      </motion.div>
      
      <motion.article 
        variants={cardTransitionVariant}
        initial="initial"
        animate="animate"
        className="card"
      >
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
        )}
        <div className="p-8">
          <motion.h1 
            variants={headerTransitionVariant}
            className="text-4xl font-bold text-yellow-400 mb-4"
          >
            {post.title}
          </motion.h1>
          <motion.div 
            variants={descriptionTransitionVariant}
            className="flex items-center text-gray-300 mb-8"
          >
            <span>{post.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </motion.div>
          
          <motion.div 
            variants={descriptionTransitionVariant}
            className="prose prose-lg max-w-none"
          >
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-300">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {post.videoUrl && (
            <motion.div 
              variants={descriptionTransitionVariant}
              className="mt-8"
            >
              <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Video</h2>
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={post.videoUrl}
                  className="w-full h-full rounded-lg"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          )}
        </div>
      </motion.article>
    </motion.div>
  );
};

export default BlogPostDetail; 