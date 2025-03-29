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

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Augmented Reality',
      description: 'Transform your business with immersive AR experiences that blend digital and physical worlds.',
      features: [
        'Product Visualization',
        'Interactive Training',
        'AR Navigation',
        'Virtual Try-On'
      ]
    },
    {
      title: 'Computer Vision',
      description: 'Leverage advanced computer vision technology to analyze and understand visual data.',
      features: [
        'Object Detection',
        'Facial Recognition',
        'Motion Tracking',
        'Quality Control'
      ]
    },
    {
      title: 'Mixed Reality',
      description: 'Create seamless experiences that combine AR and VR for maximum impact.',
      features: [
        'Virtual Meetings',
        'Remote Collaboration',
        'Interactive Learning',
        'Virtual Prototyping'
      ]
    }
  ];

  const solutionsRef = useRef(null);
  const solutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });

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
          Our Solutions
        </motion.h1>
        <motion.p 
          variants={descriptionTransitionVariant}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Comprehensive AR and computer vision solutions for your business
        </motion.p>
      </div>
      <motion.div 
        ref={solutionsRef}
        variants={staggerContainerVariant}
        initial="initial"
        animate={solutionsInView ? "animate" : "initial"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            variants={cardTransitionVariant}
            className="card"
          >
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">{solution.title}</h2>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <span className="text-yellow-400 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
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
          Get Started
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Solutions; 