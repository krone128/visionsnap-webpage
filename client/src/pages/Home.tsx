import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Vision with AR & Computer Vision
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              We help businesses create immersive experiences and intelligent solutions
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/portfolio" className="btn btn-secondary">
                View Our Work
              </Link>
              <Link to="/contact" className="btn btn-primary bg-white text-primary-600 hover:bg-gray-100">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Augmented Reality</h3>
              <p className="text-gray-600 mb-4">
                Create immersive AR experiences for your customers and employees
              </p>
              <Link to="/solutions#ar" className="text-primary-600 hover:text-primary-700">
                Learn more →
              </Link>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Computer Vision</h3>
              <p className="text-gray-600 mb-4">
                Implement intelligent vision systems for automation and analysis
              </p>
              <Link to="/solutions#cv" className="text-primary-600 hover:text-primary-700">
                Learn more →
              </Link>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Custom Development</h3>
              <p className="text-gray-600 mb-4">
                Tailored solutions to meet your specific business needs
              </p>
              <Link to="/solutions#custom" className="text-primary-600 hover:text-primary-700">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business
          </p>
          <Link to="/contact" className="btn btn-primary bg-white text-gray-900 hover:bg-gray-100">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 