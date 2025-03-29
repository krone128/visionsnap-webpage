import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useAuth } from '../contexts/AuthContext';
import GeometricMesh from './GeometricMesh';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-dark-900 relative">
      <GeometricMesh />
      <div className="relative z-10">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="glass-panel p-6">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout; 