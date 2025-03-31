import React, { useState } from 'react';
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

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const infoRef = useRef(null);
  const formRef = useRef(null);
  const infoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div 
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="container mx-auto px-4 py-8"
    >
      <div className="text-center mb-12">
        <motion.h1 
          variants={headerTransitionVariant}
          className="text-4xl font-bold text-primary mb-4"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          variants={descriptionTransitionVariant}
          className="text-xl text-secondary max-w-2xl mx-auto"
        >
          Get in touch with our team to discuss your project
        </motion.p>
      </div>
      <motion.div 
        variants={staggerContainerVariant}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <motion.div 
          ref={infoRef}
          variants={cardTransitionVariant}
          initial="initial"
          animate={infoInView ? "animate" : "initial"}
          className="card"
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary">Get in Touch</h2>
            <p className="text-secondary mb-6">
              Have questions about our AR and computer vision solutions? We're here to help.
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Address</h3>
                <p className="text-secondary">123 Tech Street</p>
                <p className="text-secondary">San Francisco, CA 94105</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Contact</h3>
                <p className="text-secondary">Email: contact@visionsnap.com</p>
                <p className="text-secondary">Phone: (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-primary mb-2">Hours</h3>
                <p className="text-secondary">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-secondary">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          ref={formRef}
          variants={cardTransitionVariant}
          initial="initial"
          animate={formInView ? "animate" : "initial"}
          className="card"
        >
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="form-input"
                  required
                />
              </div>
              <button type="submit" className="btn">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact; 