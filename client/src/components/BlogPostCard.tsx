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
    Technology: { bg: 'rgba(156, 163, 175, 0.2)', text: '#D1D5DB', border: 'rgba(156, 163, 175, 0.3)' }, // Gray
    AI: { bg: 'rgba(139, 92, 246, 0.2)', text: '#A78BFA', border: 'rgba(139, 92, 246, 0.3)' }, // Purple
    Innovation: { bg: 'rgba(234, 179, 8, 0.2)', text: '#FBBF24', border: 'rgba(234, 179, 8, 0.3)' }, // Yellow
    Future: { bg: 'rgba(139, 92, 246, 0.2)', text: '#A78BFA', border: 'rgba(139, 92, 246, 0.3)' }, // Purple
    Development: { bg: 'rgba(234, 179, 8, 0.2)', text: '#FBBF24', border: 'rgba(234, 179, 8, 0.3)' } // Yellow
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

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <Card 
      className="card bg-black/80"
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: '0 0 20px rgba(234, 179, 8, 0.3)'
        }
      }}
    >
      {post.imageUrl && (
        <CardMedia
          component="img"
          height="200"
          image={post.imageUrl}
          alt={post.title}
          className="metallic-border"
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      )}
      <CardContent className="flex-grow" sx={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <motion.div 
          variants={blogPostContentVariant}
          initial="initial"
          animate="animate"
        >
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
            <Avatar 
              sx={{ 
                width: 40, 
                height: 40, 
                mr: 2,
                bgcolor: 'primary.main',
                border: '2px solid',
                borderColor: 'yellow.400'
              }}
            >
              {post.author.name.charAt(0)}
            </Avatar>
            <Box>
              <Typography variant="subtitle2" className="text-yellow-400">
                {post.author.name}
              </Typography>
              <Typography variant="caption" className="text-gray-400">
                {date}
              </Typography>
            </Box>
          </Box>

          <Typography variant="h6" component="h2" className="text-yellow-400 mb-2">
            {post.title}
          </Typography>
          
          <Typography variant="body2" className="text-gray-300 mb-4">
            {excerpt}
          </Typography>

          <Box className="flex flex-wrap gap-2 mb-3">
            {randomTags.map((tag, index) => {
              const tagStyle = tagCategories[tag as keyof typeof tagCategories] || {
                bg: 'rgba(234, 179, 8, 0.2)',
                text: '#FBBF24',
                border: 'rgba(234, 179, 8, 0.3)'
              };
              
              return (
                <Chip
                  key={index}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: tagStyle.bg,
                    color: tagStyle.text,
                    border: `1px solid ${tagStyle.border}`,
                    '&:hover': {
                      backgroundColor: tagStyle.bg.replace('0.2', '0.3'),
                      transform: 'translateY(-1px)',
                      transition: 'all 0.2s ease-in-out'
                    }
                  }}
                />
              );
            })}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <IconButton 
                onClick={handleLike}
                size="small"
                sx={{ 
                  color: isLiked ? 'error.main' : 'text.secondary',
                  '&:hover': {
                    color: 'error.main'
                  }
                }}
              >
                {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              </IconButton>
              <Typography variant="body2" className="text-gray-400 ml-1">
                {likes}
              </Typography>
            </Box>
            <Link 
              to={`/blog/${post.id}`}
              className="text-yellow-400 hover:text-yellow-300 text-sm"
            >
              Read more →
            </Link>
          </Box>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard; 