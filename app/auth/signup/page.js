'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError('');
      setLoading(true);
      await signup(email, password, name);
      router.push('/');
    } catch (error) {
      setError('Failed to create an account: ' + error.message);
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
            <h2>Create Your Account</h2>
            <p>Join our community of writers and readers</p>
          </div>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Enter your full name"
              />
            </div>
            
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
                placeholder="Create a password"
              />
            </div>
            
            <motion.button 
              type="submit" 
              className="btn btn-primary auth-submit-btn"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? 'Creating Account...' : 'Sign Up'}
            </motion.button>
          </form>
          
          <div className="auth-footer">
            <p>Already have an account? <Link href="/auth/login">Log In</Link></p>
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