'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await login(email, password);
      router.push('/');
    } catch (error) {
      setError('Failed to log in: ' + error.message);
    }
    
    setLoading(false);
  };

  return (
    <div className="auth-page-with-bg">
      <div className="auth-container">
        <motion.div 
          className="auth-card glassmorphic"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="auth-header">
            <h2>Welcome Back</h2>
            <p>Sign in to your account</p>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            
            <motion.button 
              type="submit" 
              className="btn btn-primary auth-submit-btn"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Logging In...' : 'Log In'}
            </motion.button>
          </form>
          
          <div className="auth-footer">
            <p>Don't have an account? <Link href="/auth/signup">Sign Up</Link></p>
          </div>
        </motion.div>
      </div>
      
      {/* Inline styles for background to ensure it works */}
      <style jsx global>{`
        .auth-page-with-bg {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, rgba(15, 15, 26, 0.9) 0%, rgba(26, 26, 46, 0.9) 50%, rgba(63, 66, 241, 0.6) 100%), 
                     url('/images/background.gif') center/cover no-repeat;
        }
        
        @media (max-width: 768px) {
          .auth-page-with-bg {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
}