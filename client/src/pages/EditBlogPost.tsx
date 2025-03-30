import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

const EditBlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    videoUrl: ''
  });
  const [validationErrors, setValidationErrors] = useState({
    title: '',
    content: '',
    imageUrl: '',
    videoUrl: ''
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/blog/${id}`);
        setPost(response.data);
        setFormData({
          title: response.data.title,
          content: response.data.content,
          imageUrl: response.data.imageUrl || '',
          videoUrl: response.data.videoUrl || ''
        });
      } catch (err) {
        setError('Failed to fetch blog post');
        console.error('Error fetching blog post:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setValidationErrors({
      title: '',
      content: '',
      imageUrl: '',
      videoUrl: ''
    });

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token');

      await axios.put(`http://localhost:5000/api/blog/${id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      navigate(`/blog/${id}`);
    } catch (err) {
      console.error('Error updating blog post:', err);
      setValidationErrors({
        title: 'Failed to update blog post',
        content: '',
        imageUrl: '',
        videoUrl: ''
      });
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="flex-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container py-12">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-error">{error || 'Post not found'}</p>
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
      className="container mx-auto px-4 py-8"
    >
      <motion.div 
        variants={headerTransitionVariant}
        initial="initial"
        animate="animate"
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          variants={headerTransitionVariant}
          className="text-4xl font-bold text-primary mb-8"
        >
          Edit Blog Post
        </motion.h1>

        <motion.form 
          variants={cardTransitionVariant}
          initial="initial"
          animate="animate"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-secondary">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={`form-input mt-1 ${validationErrors.title ? 'border-error' : ''}`}
              required
            />
            {validationErrors.title && (
              <p className="mt-1 text-sm text-error">{validationErrors.title}</p>
            )}
          </div>

          <div>
            <label htmlFor="content" className="block text-sm font-medium text-secondary">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={10}
              className={`form-input mt-1 ${validationErrors.content ? 'border-error' : ''}`}
              required
            />
            {validationErrors.content && (
              <p className="mt-1 text-sm text-error">{validationErrors.content}</p>
            )}
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-secondary">
              Image URL (optional)
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className={`form-input mt-1 ${validationErrors.imageUrl ? 'border-error' : ''}`}
            />
            {validationErrors.imageUrl && (
              <p className="mt-1 text-sm text-error">{validationErrors.imageUrl}</p>
            )}
          </div>

          <div>
            <label htmlFor="videoUrl" className="block text-sm font-medium text-secondary">
              Video URL (optional)
            </label>
            <input
              type="url"
              id="videoUrl"
              name="videoUrl"
              value={formData.videoUrl}
              onChange={handleChange}
              className={`form-input mt-1 ${validationErrors.videoUrl ? 'border-error' : ''}`}
            />
            {validationErrors.videoUrl && (
              <p className="mt-1 text-sm text-error">{validationErrors.videoUrl}</p>
            )}
          </div>

          <motion.div 
            variants={descriptionTransitionVariant}
            className="flex justify-end space-x-4"
          >
            <button
              type="button"
              onClick={() => navigate(`/blog/${id}`)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="btn"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default EditBlogPost; 