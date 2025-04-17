import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  pageTransitionVariant, 
  headerTransitionVariant, 
  descriptionTransitionVariant, 
  cardTransitionVariant
} from '../styles/animations';
import '../styles/animations.css';

// Static blog posts data
const blogPosts = {
  '1': {
    id: '1',
    title: 'The Future of AR in Business',
    content: `Augmented Reality is transforming how businesses operate. From retail to manufacturing, AR is creating new opportunities for innovation and efficiency.

    Companies are using AR to train employees, visualize products, and enhance customer experiences. The technology has proven particularly valuable in complex assembly tasks and remote collaboration scenarios.

    As AR hardware becomes more accessible and powerful, we expect to see even more innovative applications in the business world.`,
    imageUrl: 'https://example.com/ar-business.jpg',
    author: {
      name: 'John Doe',
      createdAt: '2024-01-15'
    }
  },
  '2': {
    id: '2',
    title: 'Computer Vision in Modern Applications',
    content: `Computer Vision technology is revolutionizing industries across the board. From autonomous vehicles to quality control in manufacturing, CV is becoming an essential tool for businesses.

    Modern CV applications can process and analyze visual data in real-time, making decisions faster and more accurately than human operators.

    The combination of CV with machine learning has opened up new possibilities in object detection, facial recognition, and automated inspection systems.`,
    imageUrl: 'https://example.com/cv-apps.jpg',
    author: {
      name: 'Jane Smith',
      createdAt: '2024-02-01'
    }
  }
};

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  if (!post) {
    return (
      <div className="container py-12">
        <div className="bg-red-50 border border-red-200 rounded-md p-4">
          <p className="text-error">Post not found</p>
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
      className="container py-12"
    >
      <motion.div 
        variants={headerTransitionVariant}
        initial="initial"
        animate="animate"
        className="flex justify-between items-center mb-8"
      >
        <Link to="/blog" className="text-primary hover:text-primary-hover transition-colors">
          ← Back to Blog
        </Link>
      </motion.div>
      
      <motion.article 
        variants={cardTransitionVariant}
        initial="initial"
        animate="animate"
        className="card"
      >
        {post.imageUrl && (
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg"
          />
        )}
        <div className="p-8">
          <motion.h1 
            variants={headerTransitionVariant}
            className="text-4xl font-bold text-primary mb-4"
          >
            {post.title}
          </motion.h1>
          <motion.div 
            variants={descriptionTransitionVariant}
            className="flex items-center text-secondary mb-8"
          >
            <span>{post.author.name}</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.author.createdAt).toLocaleDateString()}</span>
          </motion.div>
          
          <motion.div 
            variants={descriptionTransitionVariant}
            className="prose prose-lg max-w-none"
          >
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-secondary">
                {paragraph.trim()}
              </p>
            ))}
          </motion.div>
        </div>
      </motion.article>
    </motion.div>
  );
};

export default BlogPostDetail; 