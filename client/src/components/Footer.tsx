import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-primary/20" style={{ backgroundColor: 'var(--color-bg-80)' }}>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">About Us</h3>
            <p className="text-secondary">
              VisionSnap is a leading provider of AR and computer vision solutions,
              helping businesses transform their digital presence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="text-secondary hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-secondary hover:text-primary transition-colors">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary hover:text-primary transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Contact</h3>
            <ul className="space-y-2 text-secondary">
              <li>123 Tech Street</li>
              <li>San Francisco, CA 94105</li>
              <li>contact@visionsnap.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary/20 text-center text-secondary">
          <p>&copy; {new Date().getFullYear()} VisionSnap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 