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

const Home: React.FC = () => {
  const features = [
    {
      title: 'Augmented Reality',
      description: 'Transform your business with immersive AR experiences.',
      link: '/solutions#ar'
    },
    {
      title: 'Computer Vision',
      description: 'Advanced image processing and analysis solutions.',
      link: '/solutions#cv'
    },
    {
      title: 'Mixed Reality',
      description: 'Seamless integration of AR and VR technologies.',
      link: '/solutions#mr'
    }
  ];

  const featuresRef = useRef(null);
  const featuresInView = useInView(featuresRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative min-h-screen"
    >
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div 
          variants={headerTransitionVariant}
          initial="initial"
          animate="animate"
          className="text-center mb-16"
        >
          <motion.h1 
            variants={headerTransitionVariant}
            className="text-5xl font-bold mb-6"
          >
            VisionSnap
          </motion.h1>
          <motion.p 
            variants={descriptionTransitionVariant}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Empowering businesses with cutting-edge AR and computer vision solutions.
          </motion.p>
          <motion.div variants={descriptionTransitionVariant}>
            <Link to="/contact" className="btn">
              Get Started
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          ref={featuresRef}
          variants={staggerContainerVariant}
          initial="initial"
          animate={featuresInView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardTransitionVariant}
              className="card"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h2>
                <p className="mb-4">
                  {feature.description}
                </p>
                <Link 
                  to={feature.link} 
                  className="text-primary hover:text-primary-hover transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={descriptionTransitionVariant}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you achieve your goals.
          </p>
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home; 