import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/80 border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">About Us</h3>
            <p className="text-gray-400">
              VisionSnap is a leading provider of AR and computer vision solutions,
              helping businesses transform their digital presence.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/portfolio" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Solutions
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors duration-300">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Tech Street</li>
              <li>San Francisco, CA 94105</li>
              <li>contact@visionsnap.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-yellow-500/20 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} VisionSnap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 