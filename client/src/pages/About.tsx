import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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

  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold mb-6"
        >
          About VisionSnap
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 max-w-3xl mx-auto"
        >
          We're on a mission to revolutionize the way businesses leverage computer vision and AI technology.
        </motion.p>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        ref={missionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="bg-gray-50 rounded-lg p-8 mb-16"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          Our Mission
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={missionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto text-center"
        >
          At VisionSnap, we believe in making advanced computer vision and AI technology accessible to businesses of all sizes.
          Our goal is to help companies transform their operations through innovative solutions that drive efficiency,
          improve accuracy, and create new opportunities for growth.
        </motion.p>
      </motion.div>

      {/* Values Section */}
      <motion.div 
        ref={valuesRef}
        initial={{ opacity: 0, y: 50 }}
        animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
      >
        {[
          {
            icon: "🎯",
            title: "Innovation",
            description: "Constantly pushing the boundaries of what's possible with AI technology."
          },
          {
            icon: "🤝",
            title: "Partnership",
            description: "Working closely with our clients to deliver tailored solutions."
          },
          {
            icon: "💡",
            title: "Excellence",
            description: "Committed to delivering the highest quality solutions and service."
          }
        ].map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
            <p className="text-gray-600">{value.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Section */}
      <motion.div
        ref={teamRef}
        initial={{ opacity: 0, y: 50 }}
        animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 * (index + 1) }}
              className="text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-primary-600 mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About; 