import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Link, Chip, Avatar, Stack } from '@mui/material';
import { BlogPost } from '../types/blog';
import { CalendarToday, Person } from '@mui/icons-material';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  // Generate random tags for demonstration (in a real app, these would come from the backend)
  const tags = ['Technology', 'AI', 'Innovation', 'Future', 'Development'];
  const randomTags = tags.sort(() => 0.5 - Math.random()).slice(0, 3);

  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6
        }
      }}
    >
      {post.imageUrl && (
        <CardMedia
          component="img"
          height="200"
          image={post.imageUrl}
          alt={post.title}
          sx={{
            objectFit: 'cover',
            transition: 'transform 0.3s',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography 
          gutterBottom 
          variant="h5" 
          component="h2"
          sx={{
            fontWeight: 600,
            color: 'primary.main',
            '&:hover': {
              color: 'primary.dark'
            }
          }}
        >
          {post.title}
        </Typography>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          paragraph
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {post.content.substring(0, 150)}...
        </Typography>
        
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          {randomTags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              sx={{
                backgroundColor: 'primary.light',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'primary.main'
                }
              }}
            />
          ))}
        </Stack>

        <Box sx={{ 
          mt: 'auto', 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          borderTop: '1px solid',
          borderColor: 'divider',
          pt: 2
        }}>
          <Avatar 
            sx={{ 
              bgcolor: 'primary.main',
              width: 32,
              height: 32
            }}
          >
            <Person />
          </Avatar>
          <Box sx={{ flex: 1 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              {post.author.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
              <CalendarToday sx={{ fontSize: 16 }} />
              <Typography variant="caption">
                {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Typography>
            </Box>
          </Box>
          <Link 
            href={`/blog/${post.id}`} 
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': {
                color: 'primary.dark',
                textDecoration: 'underline'
              }
            }}
          >
            Read More →
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard; 