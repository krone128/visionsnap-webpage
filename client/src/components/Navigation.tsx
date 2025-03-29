import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { user, login, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-black/80 border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-32">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-4xl font-bold text-yellow-500">VisionSnap</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/') ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-400 hover:text-yellow-400 hover:border-yellow-500/30'
                }`}
              >
                Home
              </Link>
              <Link
                to="/portfolio"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/portfolio') ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-400 hover:text-yellow-400 hover:border-yellow-500/30'
                }`}
              >
                Portfolio
              </Link>
              <Link
                to="/solutions"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/solutions') ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-400 hover:text-yellow-400 hover:border-yellow-500/30'
                }`}
              >
                Solutions
              </Link>
              <Link
                to="/about"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/about') ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-400 hover:text-yellow-400 hover:border-yellow-500/30'
                }`}
              >
                About
              </Link>
              <Link
                to="/blog"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/blog') ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-400 hover:text-yellow-400 hover:border-yellow-500/30'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive('/contact') ? 'border-yellow-500 text-yellow-400' : 'border-transparent text-gray-400 hover:text-yellow-400 hover:border-yellow-500/30'
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                {(user.role === 'admin' || user.role === 'editor') && (
                  <Link to="/admin" className="text-gray-400 hover:text-yellow-400">
                    Admin
                  </Link>
                )}
                <div className="flex items-center space-x-2">
                  {user.picture && (
                    <img
                      src={user.picture}
                      alt={user.name}
                      className="h-8 w-8 rounded-full border border-yellow-500/30"
                    />
                  )}
                  <span className="text-gray-300">{user.name}</span>
                </div>
                <button
                  onClick={logout}
                  className="btn"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={login}
                className="btn"
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