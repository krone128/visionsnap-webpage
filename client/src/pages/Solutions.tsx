import React from 'react';

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

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Our Solutions</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{solution.icon}</div>
            <h2 className="text-2xl font-semibold mb-4">{solution.title}</h2>
            <p className="text-gray-600 mb-6">{solution.description}</p>
            <ul className="space-y-2">
              {solution.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <span className="text-primary-600 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how our solutions can help you achieve your goals. Contact us today for a free consultation.
        </p>
        <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Solutions; 