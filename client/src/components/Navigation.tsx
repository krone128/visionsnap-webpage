import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const DesktopNavLinks = () => (
    <>
      <Link
        to="/"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors font-primary tracking-wide ${
          isActive('/') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        Home
      </Link>
      <Link
        to="/portfolio"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors font-primary tracking-wide ${
          isActive('/portfolio') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        Portfolio
      </Link>
      <Link
        to="/solutions"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors font-primary tracking-wide ${
          isActive('/solutions') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        Solutions
      </Link>
      <Link
        to="/about"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors font-primary tracking-wide ${
          isActive('/about') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        About
      </Link>
      <Link
        to="/blog"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors font-primary tracking-wide ${
          isActive('/blog') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        Blog
      </Link>
      <Link
        to="/contact"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors font-primary tracking-wide ${
          isActive('/contact') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        Contact
      </Link>
    </>
  );

  const MobileNavLinks = () => (
    <>
      <Link
        to="/"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors font-primary tracking-wide ${
          isActive('/') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/portfolio"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors font-primary tracking-wide ${
          isActive('/portfolio') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Portfolio
      </Link>
      <Link
        to="/solutions"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors font-primary tracking-wide ${
          isActive('/solutions') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Solutions
      </Link>
      <Link
        to="/about"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors font-primary tracking-wide ${
          isActive('/about') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About
      </Link>
      <Link
        to="/blog"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors font-primary tracking-wide ${
          isActive('/blog') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Blog
      </Link>
      <Link
        to="/contact"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors font-primary tracking-wide ${
          isActive('/contact') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg/80 border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary">
                VisionSnap
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <DesktopNavLinks />
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-secondary hover:text-primary hover:bg-primary/10 focus:outline-none transition-colors"
            >
              {theme === 'dark' ? '🌞' : '🌙'}
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary hover:bg-primary/10 focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1" style={{ backgroundColor: 'var(--color-bg-80)' }}>
          <MobileNavLinks />
          <div className="px-3 py-2">
            <button
              onClick={toggleTheme}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary hover:bg-primary/10 transition-colors"
            >
              {theme === 'dark' ? '🌞 Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 