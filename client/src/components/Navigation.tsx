import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { user, login, logout } = useAuth();
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
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
          isActive('/') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        Home
      </Link>
      <Link
        to="/portfolio"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
          isActive('/portfolio') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        Portfolio
      </Link>
      <Link
        to="/solutions"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
          isActive('/solutions') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        Solutions
      </Link>
      <Link
        to="/about"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
          isActive('/about') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        About
      </Link>
      <Link
        to="/blog"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
          isActive('/blog') 
            ? 'border-primary text-primary' 
            : 'border-transparent text-secondary hover:text-primary hover:border-primary/30'
        }`}
      >
        Blog
      </Link>
      <Link
        to="/contact"
        className={`inline-flex items-center px-3 py-2 text-sm font-medium border-b-2 transition-colors ${
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
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
          isActive('/') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Home
      </Link>
      <Link
        to="/portfolio"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
          isActive('/portfolio') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Portfolio
      </Link>
      <Link
        to="/solutions"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
          isActive('/solutions') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Solutions
      </Link>
      <Link
        to="/about"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
          isActive('/about') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        About
      </Link>
      <Link
        to="/blog"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
          isActive('/blog') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Blog
      </Link>
      <Link
        to="/contact"
        className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
          isActive('/contact') ? 'text-primary bg-primary/10' : 'text-secondary hover:text-primary hover:bg-primary/10'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="bg-black/80 border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <span className="text-3xl sm:text-4xl font-bold text-primary">VisionSnap</span>
            </Link>
            <div className="hidden sm:ml-8 sm:flex sm:space-x-4">
              <DesktopNavLinks />
            </div>
          </div>
          
          {/* Desktop auth buttons */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            {user ? (
              <div className="flex items-center space-x-6">
                {(user.role === 'admin' || user.role === 'editor') && (
                  <Link 
                    to="/admin" 
                    className="text-sm font-medium text-secondary hover:text-primary transition-colors"
                  >
                    Admin
                  </Link>
                )}
                <div className="flex items-center space-x-3">
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="h-8 w-8 rounded-full border border-primary/30"
                    />
                  )}
                  <span className="text-sm font-medium text-text">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="btn text-sm"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={login}
                className="btn text-sm"
              >
                Sign In
              </button>
            )}
          </div>

          {/* Mobile menu button */}
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

      {/* Mobile menu */}
      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="pt-2 pb-3 space-y-1 bg-black/90">
          <MobileNavLinks />
          <div className="px-3 py-2">
            {user ? (
              <div className="flex flex-col space-y-2">
                {(user.role === 'admin' || user.role === 'editor') && (
                  <Link to="/admin" className="text-secondary hover:text-primary transition-colors">
                    Admin
                  </Link>
                )}
                <div className="flex items-center space-x-2">
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="h-8 w-8 rounded-full border border-primary/30"
                    />
                  )}
                  <span className="text-text">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="btn w-full"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={login}
                className="btn w-full"
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 