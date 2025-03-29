import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'AR Product Visualization',
      description: 'Interactive 3D product visualization using AR technology.',
      image: '/images/portfolio/ar-product.jpg',
      category: 'AR',
      link: '/portfolio/ar-product'
    },
    {
      id: 2,
      title: 'Computer Vision Analytics',
      description: 'Advanced analytics platform using computer vision.',
      image: '/images/portfolio/cv-analytics.jpg',
      category: 'Computer Vision',
      link: '/portfolio/cv-analytics'
    },
    {
      id: 3,
      title: 'Mixed Reality Training',
      description: 'Training platform combining AR and VR technologies.',
      image: '/images/portfolio/mr-training.jpg',
      category: 'Mixed Reality',
      link: '/portfolio/mr-training'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Our Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="card group">
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover metallic-border"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Link
                  to={project.link}
                  className="btn"
                >
                  View Project
                </Link>
              </div>
            </div>
            <div className="p-6">
              <span className="badge-yellow mb-2 block">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold mb-2 text-yellow-400">{project.title}</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link to="/contact" className="btn">
          Start Your Project
        </Link>
      </div>
    </div>
  );
};

export default Portfolio; 