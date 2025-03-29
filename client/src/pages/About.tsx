import React from 'react';

const About: React.FC = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years of experience in AI and computer vision.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      bio: 'Expert in machine learning and computer vision technologies.',
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Mike Johnson',
      role: 'Lead Developer',
      bio: 'Full-stack developer specializing in AI integration and cloud solutions.',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">About VisionSnap</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're on a mission to revolutionize the way businesses leverage computer vision and AI technology.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center">
          At VisionSnap, we believe in making advanced computer vision and AI technology accessible to businesses of all sizes.
          Our goal is to help companies transform their operations through innovative solutions that drive efficiency,
          improve accuracy, and create new opportunities for growth.
        </p>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-semibold mb-2">Innovation</h3>
          <p className="text-gray-600">Constantly pushing the boundaries of what's possible with AI technology.</p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">🤝</div>
          <h3 className="text-xl font-semibold mb-2">Partnership</h3>
          <p className="text-gray-600">Working closely with our clients to deliver tailored solutions.</p>
        </div>
        <div className="text-center p-6">
          <div className="text-4xl mb-4">💡</div>
          <h3 className="text-xl font-semibold mb-2">Excellence</h3>
          <p className="text-gray-600">Committed to delivering the highest quality solutions and service.</p>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About; 