import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { useAuth } from '../contexts/AuthContext';
import GeometricMesh from './GeometricMesh';
import CursorGlow from './CursorGlow';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-black relative">
      <div className="fixed inset-0 z-0">
        <GeometricMesh />
      </div>
      <CursorGlow />
      
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
          <div className="relative max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout; 