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
              <Typography variant="subtitle2" className="text-primary mb-1">
                {post.author.name}
              </Typography>
              <Typography variant="caption" className="text-muted">
                {date}
              </Typography>
            </Box>
          </Box>

          <Typography variant="h6" component="h2" className="text-primary mb-3">
            {post.title}
          </Typography>
          
          <Typography variant="body2" className="text-secondary mb-8 flex-grow min-h-[120px]">
            {excerpt}
          </Typography>

          <Box className="flex flex-wrap gap-2 mb-4">
            {randomTags.map((tag, index) => {
              const tagStyle = tagCategories[tag as keyof typeof tagCategories] || {
                bg: 'var(--color-bg)',
                text: 'var(--color-primary)',
                border: 'var(--color-border)'
              };
              
              return (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  className="metallic-border transition-all duration-200 hover:-translate-y-0.5"
                  sx={{
                    backgroundColor: tagStyle.bg,
                    color: tagStyle.text,
                    border: `1px solid ${tagStyle.border}`
                  }}
                />
              );
            })}
          </Box>

          <Box className="flex items-center justify-between mt-auto">
            <Box className="flex items-center">
              <IconButton 
                onClick={handleLike}
                size="small"
                className={`transition-colors ${isLiked ? 'text-error' : 'text-muted hover:text-error'}`}
              >
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <Typography variant="body2" className="text-muted ml-1">
                {likes}
              </Typography>
            </Box>
            <Link 
              to={`/blog/${post.id}`}
              className="text-primary hover:text-primary-hover text-sm font-medium transition-colors"
            >
              Read more →
            </Link>
          </Box>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPostCard; 