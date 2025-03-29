import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BlogPost } from '../types/blog';
import { Container, Typography, Box, CircularProgress, Alert } from '@mui/material';
import BlogPostCard from '../components/BlogPostCard';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
    <Container maxWidth="lg">
      <Box py={8}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography variant="h2" component="h1" gutterBottom>
            Blog
          </Typography>
        </motion.div>
        <Box sx={{ mt: 4 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {posts && posts.length > 0 ? (
              posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
                >
                  <BlogPostCard post={post} />
                </motion.div>
              ))
            ) : (
              <Typography variant="body1" color="textSecondary">
                No blog posts available.
              </Typography>
            )}
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Blog; 