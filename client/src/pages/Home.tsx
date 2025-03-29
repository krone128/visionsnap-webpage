import React from 'react';
import { Link } from 'react-router-dom';
import GeometricMesh from '../components/GeometricMesh';

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

  return (
    <div className="relative min-h-screen">
      <GeometricMesh />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-yellow-400">
            VisionSnap
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Empowering businesses with cutting-edge AR and computer vision solutions.
          </p>
          <Link to="/contact" className="btn">
            Get Started
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4 text-yellow-400">{feature.title}</h2>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <Link to={feature.link} className="text-yellow-400 hover:text-yellow-300">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-yellow-400">Ready to Transform Your Business?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you achieve your goals.
          </p>
          <Link to="/contact" className="btn">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home; 