import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BlogPost } from '../types/blog';
import { Container, Typography, Box, CircularProgress, Alert } from '@mui/material';
import BlogPostCard from '../components/BlogPostCard';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  pageTransitionVariant, 
  headerTransitionVariant, 
  descriptionTransitionVariant, 
  cardTransitionVariant, 
  staggerContainerVariant 
} from '../styles/animations';
import '../styles/animations.css';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log('Fetching blog posts...');
        setLoading(true);
        setError(null);
        const response = await axios.get('http://localhost:5000/api/blog');
        console.log('Received blog posts:', response.data);
        setPosts(response.data);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  console.log('Current posts state:', posts);
  console.log('Loading state:', loading);
  console.log('Error state:', error);

  if (loading) {
    return (
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="lg">
        <Box mt={4}>
          <Alert severity="error">{error}</Alert>
        </Box>
      </Container>
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
      <div className="text-center mb-12">
        <motion.h1 
          variants={headerTransitionVariant}
          className="text-4xl font-bold text-yellow-400 mb-4"
        >
          Blog
        </motion.h1>
        <motion.p 
          variants={descriptionTransitionVariant}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Insights and updates from our team
        </motion.p>
      </div>
      <motion.div 
        variants={staggerContainerVariant}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {posts && posts.length > 0 ? (
          posts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardTransitionVariant}
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))
        ) : (
          <Typography variant="body1" color="textSecondary">
            No blog posts available.
          </Typography>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Blog; 