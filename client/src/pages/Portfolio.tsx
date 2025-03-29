import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  pageTransitionVariant, 
  headerTransitionVariant, 
  descriptionTransitionVariant, 
  cardTransitionVariant, 
  staggerContainerVariant 
} from '../styles/animations';
import '../styles/animations.css';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AR Product Visualization',
      description: 'Interactive 3D product visualization for e-commerce',
      image: '/images/portfolio/ar-product.jpg',
      category: 'AR',
      link: '/portfolio/ar-product',
      tags: ['AR', '3D', 'E-commerce']
    },
    {
      id: 2,
      title: 'Computer Vision Analytics',
      description: 'Real-time object detection and tracking system',
      image: '/images/portfolio/cv-analytics.jpg',
      category: 'Computer Vision',
      link: '/portfolio/cv-analytics',
      tags: ['Computer Vision', 'AI', 'Analytics']
    },
    {
      id: 3,
      title: 'Mixed Reality Training',
      description: 'Immersive training solution for industrial workers',
      image: '/images/portfolio/mr-training.jpg',
      category: 'Mixed Reality',
      link: '/portfolio/mr-training',
      tags: ['MR', 'Training', 'Industrial']
    }
  ];

  const portfolioRef = useRef(null);
  const portfolioInView = useInView(portfolioRef, { once: true, margin: "-100px" });

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
          className="text-4xl font-bold text-yellow-400 mb-4"
        >
          Our Portfolio
        </motion.h1>
        <motion.p 
          variants={descriptionTransitionVariant}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Explore our latest projects and innovations
        </motion.p>
      </div>
      <motion.div 
        ref={portfolioRef}
        variants={staggerContainerVariant}
        initial="initial"
        animate={portfolioInView ? "animate" : "initial"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardTransitionVariant}
            className="card overflow-hidden"
          >
            <div className="relative h-48">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="badge-yellow mb-2 block">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold mb-2 text-yellow-400">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 bg-yellow-400/20 text-yellow-400 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.div 
        variants={descriptionTransitionVariant}
        initial="initial"
        animate="animate"
        className="mt-12 text-center"
      >
        <Link to="/contact" className="btn">
          Start Your Project
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio; 