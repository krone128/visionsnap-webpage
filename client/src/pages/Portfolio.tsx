import React from 'react';
import { motion } from 'framer-motion';
import { 
  pageTransitionVariant, 
  headerTransitionVariant, 
  descriptionTransitionVariant, 
  cardTransitionVariant 
} from '../styles/animations';
import '../styles/animations.css';

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Dashboard',
    description: 'A comprehensive analytics platform leveraging artificial intelligence to provide real-time insights and predictive analytics for business operations.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    category: 'AI & Analytics',
    link: '#'
  },
  {
    id: '2',
    title: 'Smart Home Automation System',
    description: 'An integrated home automation solution that combines IoT devices with machine learning to create an intelligent living environment.',
    imageUrl: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&auto=format&fit=crop&q=60',
    category: 'IoT & Smart Home',
    link: '#'
  },
  {
    id: '3',
    title: 'Blockchain Supply Chain',
    description: 'A decentralized supply chain management system using blockchain technology to ensure transparency and traceability.',
    imageUrl: 'https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?w=800&auto=format&fit=crop&q=60',
    category: 'Blockchain',
    link: '#'
  },
  {
    id: '4',
    title: 'AR Product Visualization',
    description: 'An augmented reality application that allows customers to visualize products in their real environment before purchase.',
    imageUrl: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60',
    category: 'AR/VR',
    link: '#'
  },
  {
    id: '5',
    title: 'Cloud-Native Microservices',
    description: 'A scalable microservices architecture built with modern cloud technologies for high availability and performance.',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60',
    category: 'Cloud Computing',
    link: '#'
  },
  {
    id: '6',
    title: 'Cybersecurity Platform',
    description: 'An advanced security platform that uses AI to detect and prevent cyber threats in real-time.',
    imageUrl: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=60',
    category: 'Security',
    link: '#'
  }
];

const Portfolio: React.FC = () => {
  return (
    <motion.div 
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container mx-auto px-4 py-12"
    >
      <div className="text-center mb-16">
        <motion.h1 
          variants={headerTransitionVariant}
          className="text-4xl font-bold mb-4"
        >
          Our Portfolio
        </motion.h1>
        <motion.p 
          variants={descriptionTransitionVariant}
          className="text-xl max-w-2xl mx-auto text-secondary"
        >
          Explore our innovative solutions and cutting-edge projects
        </motion.p>
      </div>

      <motion.div 
        variants={cardTransitionVariant}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
      >
        {portfolioItems.map((item) => (
          <motion.div
            key={item.id}
            variants={cardTransitionVariant}
            className="card group"
          >
            <div className="relative h-48 overflow-hidden rounded-lg m-4">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 metallic-border"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-primary font-medium">{item.category}</span>
                <a 
                  href={item.link}
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  View Project →
                </a>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-secondary mb-6">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio; 