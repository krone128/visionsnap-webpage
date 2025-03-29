import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Link } from '@mui/material';
import { BlogPost } from '../types/blog';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {post.imageUrl && (
        <CardMedia
          component="img"
          height="200"
          image={post.imageUrl}
          alt={post.title}
        />
      )}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {post.content.substring(0, 150)}...
        </Typography>
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            By {post.author.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(post.createdAt).toLocaleDateString()}
          </Typography>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Link href={`/blog/${post.id}`} color="primary">
            Read More
          </Link>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BlogPostCard; 