import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-primary text-xl font-bold">
            VisionSnap
          </Link>
          <nav className="flex items-center space-x-6">
            <Link to="/" className="text-secondary hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-secondary hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-secondary hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 