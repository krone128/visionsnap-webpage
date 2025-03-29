import React from 'react';
import { Link } from 'react-router-dom';

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

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Solutions</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div key={index} className="card">
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
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/contact" className="btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Solutions; 