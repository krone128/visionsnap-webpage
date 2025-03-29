import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';
import { motion } from 'framer-motion';
import { 
  pageTransitionVariant, 
  headerTransitionVariant, 
  descriptionTransitionVariant, 
  cardTransitionVariant
} from '../styles/animations';
import '../styles/animations.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleGoogleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      await login();
      const from = (location.state as any)?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      setError('Failed to login with Google');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <motion.div 
      variants={pageTransitionVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex items-center justify-center"
    >
      <motion.div 
        variants={cardTransitionVariant}
        initial="initial"
        animate="animate"
        className="glass p-8 w-full max-w-md"
      >
        <motion.h1 
          variants={headerTransitionVariant}
          className="text-3xl font-bold mb-8 text-center text-yellow-400"
        >
          Login
        </motion.h1>
        <motion.form 
          variants={descriptionTransitionVariant}
          onSubmit={handleSubmit} 
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <button type="submit" className="btn w-full">
            Login
          </button>
        </motion.form>
        <motion.div 
          variants={descriptionTransitionVariant}
          className="mt-6 text-center"
        >
          <p className="text-gray-300">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/register')}
              className="text-yellow-400 hover:text-yellow-300"
            >
              Register
            </button>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Login; 