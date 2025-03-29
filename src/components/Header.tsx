import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Logo width={32} height={32} />
          <span className="text-xl font-semibold">VisionSnap</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-300 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Features</a>
          <a href="#" className="hover:text-gray-300 transition-colors">About</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header; 