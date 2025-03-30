import React from 'react';
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

const About: React.FC = () => {
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const teamInView = useInView(teamRef, { once: true, margin: "-100px" });

  const team = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years of experience in AI and computer vision.",
      image: "/images/team/john.jpg"
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Expert in AR/VR technologies and computer vision systems.",
      image: "/images/team/jane.jpg"
    },
    {
      name: "Mike Johnson",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in AR applications.",
      image: "/images/team/mike.jpg"
    }
  ];

  return (
    <motion.div 
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container mx-auto px-4 py-12"
    >
      {/* Hero Section */}
      <motion.div 
        variants={headerTransitionVariant}
        initial="initial"
        animate="animate"
        className="text-center mb-16"
      >
        <motion.h1 
          variants={headerTransitionVariant}
          className="text-4xl font-bold mb-6"
        >
          About VisionSnap
        </motion.h1>
        <motion.p 
          variants={descriptionTransitionVariant}
          className="text-xl max-w-3xl mx-auto"
        >
          We're on a mission to revolutionize the way businesses leverage computer vision and AI technology.
        </motion.p>
      </motion.div>

      {/* Mission Section */}
      <motion.div 
        ref={missionRef}
        variants={cardTransitionVariant}
        initial="initial"
        animate={missionInView ? "animate" : "initial"}
        className="card p-8 mb-16"
      >
        <motion.h2 
          variants={headerTransitionVariant}
          className="text-3xl font-bold mb-6 text-center"
        >
          Our Mission
        </motion.h2>
        <motion.p 
          variants={descriptionTransitionVariant}
          className="text-lg max-w-3xl mx-auto text-center"
        >
          At VisionSnap, we believe in making advanced computer vision and AI technology accessible to businesses of all sizes.
          Our goal is to help companies transform their operations through innovative solutions that drive efficiency,
          improve accuracy, and create new opportunities for growth.
        </motion.p>
      </motion.div>

      {/* Values Section */}
      <motion.div 
        ref={valuesRef}
        variants={staggerContainerVariant}
        initial="initial"
        animate={valuesInView ? "animate" : "initial"}
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
            variants={cardTransitionVariant}
            className="text-center p-6"
          >
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="text-xl font-semibold mb-2">
              {value.title}
            </h3>
            <p>{value.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Team Section */}
      <motion.div
        ref={teamRef}
        variants={staggerContainerVariant}
        initial="initial"
        animate={teamInView ? "animate" : "initial"}
      >
        <motion.h2 
          variants={headerTransitionVariant}
          className="text-3xl font-bold text-center mb-12"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={cardTransitionVariant}
              className="text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-1">
                {member.name}
              </h3>
              <p className="mb-2">
                {member.role}
              </p>
              <p className="text-muted">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About; 