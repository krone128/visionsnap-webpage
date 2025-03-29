import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Solutions: React.FC = () => {
  const solutions = [
    {
      title: 'Computer Vision Solutions',
      description: 'Advanced image processing and analysis solutions powered by cutting-edge AI technology.',
      features: [
        'Object Detection & Recognition',
        'Facial Recognition Systems',
        'Motion Detection',
        'Image Classification'
      ],
      icon: '🔍'
    },
    {
      title: 'AI Integration Services',
      description: 'Seamless integration of artificial intelligence into your existing systems and workflows.',
      features: [
        'Custom AI Model Development',
        'API Integration Services',
        'Machine Learning Solutions',
        'AI Consulting'
      ],
      icon: '🤖'
    },
    {
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and visualization solutions for informed decision-making.',
      features: [
        'Predictive Analytics',
        'Data Visualization',
        'Business Intelligence',
        'Performance Metrics'
      ],
      icon: '📊'
    }
  ];

  const solutionsRef = useRef(null);
  const ctaRef = useRef(null);
  const solutionsInView = useInView(solutionsRef, { once: true, margin: "-100px" });
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-12"
    >
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Our Solutions
      </motion.h1>
      
      <motion.div 
        ref={solutionsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={solutionsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{solution.icon}</div>
            <h2 className="text-2xl font-semibold mb-4">{solution.title}</h2>
            <p className="text-gray-600 mb-6">{solution.description}</p>
            <ul className="space-y-2">
              {solution.features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={solutionsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) + 0.1 * idx }}
                  className="flex items-center text-gray-700"
                >
                  <span className="text-primary-600 mr-2">✓</span>
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        ref={ctaRef}
        initial={{ opacity: 0, y: 50 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="mt-16 text-center"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold mb-6"
        >
          Ready to Transform Your Business?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Let's discuss how our solutions can help you achieve your goals. Contact us today for a free consultation.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300"
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Solutions; 