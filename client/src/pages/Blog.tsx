import React from 'react';
import { BlogPost } from '../types/blog';
import { Container, Typography, Box } from '@mui/material';
import BlogPostCard from '../components/BlogPostCard';
import { motion } from 'framer-motion';
import { 
  pageTransitionVariant, 
  headerTransitionVariant, 
  descriptionTransitionVariant, 
  cardTransitionVariant, 
  staggerContainerVariant 
} from '../styles/animations';
import '../styles/animations.css';

// Static blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AR in Business',
    content: 'Augmented Reality is transforming how businesses operate...',
    imageUrl: 'https://example.com/ar-business.jpg',
    author: {
      name: 'John Doe',
      createdAt: '2024-01-01'
    },
    createdAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'Computer Vision in Modern Applications',
    content: 'Computer Vision technology is revolutionizing industries...',
    imageUrl: 'https://example.com/cv-apps.jpg',
    author: {
      name: 'Jane Smith',
      createdAt: '2024-01-01'
    },
    createdAt: '2024-02-01'
  }
];

const Blog: React.FC = () => {
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
          className="text-4xl font-bold mb-4"
        >
          Blog
        </motion.h1>
        <motion.p 
          variants={descriptionTransitionVariant}
          className="text-xl max-w-2xl mx-auto"
        >
          Insights and updates from our team
        </motion.p>
      </div>
      <motion.div 
        variants={staggerContainerVariant}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 gap-8 max-w-3xl mx-auto"
      >
        {blogPosts.length > 0 ? (
          blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              variants={cardTransitionVariant}
              className="w-full"
            >
              <BlogPostCard post={post} />
            </motion.div>
          ))
        ) : (
          <Typography 
            variant="body1" 
            className="text-secondary"
          >
            No blog posts available.
          </Typography>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Blog; 