import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPostDetail from './pages/BlogPostDetail';
import NewBlogPost from './pages/NewBlogPost';
import EditBlogPost from './pages/EditBlogPost';
import Login from './pages/Login';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import ProtectedRoute from './components/ProtectedRoute';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route
            path="/portfolio"
            element={
              <Layout>
                <Portfolio />
              </Layout>
            }
          />
          <Route
            path="/solutions"
            element={
              <Layout>
                <Solutions />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/blog/:id"
            element={
              <Layout>
                <BlogPostDetail />
              </Layout>
            }
          />
          <Route
            path="/blog/new"
            element={
              <Layout>
                <ProtectedRoute roles={['admin', 'editor']}>
                  <NewBlogPost />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/blog/edit/:id"
            element={
              <Layout>
                <ProtectedRoute roles={['admin', 'editor']}>
                  <EditBlogPost />
                </ProtectedRoute>
              </Layout>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
