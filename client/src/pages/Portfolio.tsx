import React from 'react';

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: 'AR Product Visualization',
      description: 'Interactive 3D product visualization for e-commerce, allowing customers to view products in their space before purchase.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
      category: 'Augmented Reality',
      tags: ['E-commerce', 'Product Visualization', '3D Modeling']
    },
    {
      title: 'VR Training Simulator',
      description: 'Immersive training environment for industrial workers, featuring realistic scenarios and safety protocols.',
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&auto=format&fit=crop&q=60',
      category: 'Virtual Reality',
      tags: ['Training', 'Safety', 'Simulation']
    },
    {
      title: 'Mixed Reality Surgery Planning',
      description: 'Advanced surgical planning tool combining patient scans with real-time 3D visualization.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=60',
      category: 'Mixed Reality',
      tags: ['Healthcare', 'Medical', '3D Visualization']
    },
    {
      title: 'AR Navigation System',
      description: 'Indoor navigation system using AR overlays to guide users through complex buildings.',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&auto=format&fit=crop&q=60',
      category: 'Augmented Reality',
      tags: ['Navigation', 'Indoor Positioning', 'User Experience']
    },
    {
      title: 'VR Museum Experience',
      description: 'Virtual museum tours allowing visitors to explore exhibits from anywhere in the world.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60',
      category: 'Virtual Reality',
      tags: ['Education', 'Cultural Heritage', 'Virtual Tours']
    },
    {
      title: 'AR Maintenance Guide',
      description: 'Real-time AR instructions for equipment maintenance and repair procedures.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&auto=format&fit=crop&q=60',
      category: 'Augmented Reality',
      tags: ['Maintenance', 'Technical Support', 'Industrial']
    },
    {
      title: 'VR Architectural Walkthrough',
      description: 'Immersive virtual walkthroughs of architectural designs before construction begins.',
      image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&auto=format&fit=crop&q=60',
      category: 'Virtual Reality',
      tags: ['Architecture', 'Design', 'Visualization']
    },
    {
      title: 'AR Art Gallery',
      description: 'Interactive AR art gallery where digital artworks respond to viewer movement and interaction.',
      image: 'https://images.unsplash.com/photo-1548278905-1e0d0c0c0c0c0?w=800&auto=format&fit=crop&q=60',
      category: 'Augmented Reality',
      tags: ['Art', 'Interactive', 'Digital Media']
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Explore our innovative XR solutions that are transforming industries and creating immersive experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-white rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            {/* Image Container with Clip Path */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 transform transition-transform duration-500 group-hover:scale-110">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-primary-600 rounded-full">
                  {project.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Create Your XR Experience?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can bring your vision to life with cutting-edge XR technology.
        </p>
        <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300">
          Start Your Project
        </button>
      </div>
    </div>
  );
};

export default Portfolio; 