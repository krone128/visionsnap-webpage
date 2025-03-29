import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BlogPost } from '../types/blog';
import { Container, Typography, Box, CircularProgress, Alert } from '@mui/material';
import BlogPostCard from '../components/BlogPostCard';

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get('http://localhost:5000/api/blog');
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
        <Typography variant="h2" component="h1" gutterBottom>
          Blog
        </Typography>
        <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={4}>
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Blog; 