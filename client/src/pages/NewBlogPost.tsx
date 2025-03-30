import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

const NewBlogPost: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    imageUrl: '',
    videoUrl: '',
  });
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.title.trim()) {
      errors.title = 'Title is required';
    }

    if (!formData.content.trim()) {
      errors.content = 'Content is required';
    }

    if (formData.imageUrl && !isValidUrl(formData.imageUrl)) {
      errors.imageUrl = 'Please enter a valid image URL';
    }

    if (formData.videoUrl && !isValidUrl(formData.videoUrl)) {
      errors.videoUrl = 'Please enter a valid video URL';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValidUrl = (url: string) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token');

      const response = await axios.post('http://localhost:5000/api/blog', formData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      navigate(`/blog/${response.data.id}`);
    } catch (err) {
      console.error('Error creating blog post:', err);
      setError('Failed to create blog post');
    } finally {
      setLoading(false);
    }
  };

  if (!user || (user.role !== 'admin' && user.role !== 'editor')) {
    return (
      <div className="container py-12">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-error">You don't have permission to create blog posts.</p>
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
          Create New Blog Post
        </motion.h1>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-8">
            <p className="text-error">{error}</p>
          </div>
        )}

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
              onClick={() => navigate('/blog')}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn"
            >
              {loading ? 'Creating...' : 'Create Post'}
            </button>
          </motion.div>
        </motion.form>
      </motion.div>
    </motion.div>
  );
};

export default NewBlogPost; 