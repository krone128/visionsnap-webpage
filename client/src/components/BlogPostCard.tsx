import React from 'react';
import { Card, CardMedia, CardContent, Typography, Chip, Box, Avatar, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { motion } from 'framer-motion';
import { blogPostContentVariant } from '../styles/animations';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  // Define tag categories with their respective colors
  const tagCategories = {
    Technology: { bg: 'var(--color-bg)', text: 'var(--color-text-secondary)', border: 'var(--color-border)' },
    AI: { bg: 'var(--color-bg)', text: 'var(--color-primary)', border: 'var(--color-border)' },
    Innovation: { bg: 'var(--color-bg)', text: 'var(--color-primary)', border: 'var(--color-border)' },
    Future: { bg: 'var(--color-bg)', text: 'var(--color-primary)', border: 'var(--color-border)' },
    Development: { bg: 'var(--color-bg)', text: 'var(--color-primary)', border: 'var(--color-border)' }
  };

  // Generate random tags for demonstration (in a real app, these would come from the backend)
  const tags = ['Technology', 'AI', 'Innovation', 'Future', 'Development'];
  const randomTags = tags.sort(() => 0.5 - Math.random()).slice(0, 3);

  // Format date
  const date = new Date(post.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Create excerpt from content
  const excerpt = post.content.length > 150 
    ? `${post.content.substring(0, 150)}...` 
    : post.content;

  // Mock likes state (in a real app, this would come from the backend)
  const [likes, setLikes] = React.useState(Math.floor(Math.random() * 100));
  const [isLiked, setIsLiked] = React.useState(false);

  // Mock image URLs for testing
  const mockImages = {
    Technology: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=60',
    AI: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60',
    Innovation: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
    Future: 'https://images.unsplash.com/photo-1515630278258-407f66498911?w=800&auto=format&fit=crop&q=60',
    Development: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop&q=60'
  };

  // Get a random image based on the first tag
  const postImageUrl = post.imageUrl || mockImages[randomTags[0] as keyof typeof mockImages];

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <div 
      className="card h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-hover"
    >
      {postImageUrl && (
        <div className="relative h-48 overflow-hidden rounded-lg m-4">
          <img
            src={postImageUrl}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 metallic-border"
          />
        </div>
      )}
      <div className="flex-grow p-6">
        <motion.div 
          variants={blogPostContentVariant}
          initial="initial"
          animate="animate"
          className="flex flex-col h-full"
        >
          <Box className="flex items-center mb-3">
            <Avatar 
              className="w-10 h-10 mr-2 bg-primary border-2 border-primary"
            >
              {post.author.name.charAt(0)}
            </Avatar>
            <Box>
              <h3 className="text-primary mb-1 font-semibold">
                {post.author.name}
              </h3>
              <span className="text-secondary text-sm">
                {date}
              </span>
            </Box>
          </Box>

          <h2 className="text-xl font-bold text-primary mb-3">
            {post.title}
          </h2>
          
          <p className="text-secondary mb-4">
            {excerpt}
          </p>

          <Box className="flex items-center justify-between mt-auto">
            <Box className="flex gap-2">
              {randomTags.map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: tagCategories[tag as keyof typeof tagCategories].bg,
                    color: tagCategories[tag as keyof typeof tagCategories].text,
                    border: `1px solid ${tagCategories[tag as keyof typeof tagCategories].border}`,
                    '&:hover': {
                      backgroundColor: 'var(--color-bg-hover)',
                    }
                  }}
                />
              ))}
            </Box>
            <IconButton 
              onClick={handleLike}
              className="text-secondary hover:text-primary"
            >
              {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </IconButton>
          </Box>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostCard; 