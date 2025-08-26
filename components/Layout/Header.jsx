// components/Layout/Header.jsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <motion.div 
            className="logo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">NexBlog</Link>
          </motion.div>
          
          <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/discover">Discover</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/about">About</Link>
          </div>
          
          <div className="auth-buttons">
            {currentUser ? (
              <>
                <span>Welcome, {currentUser.name}</span>
                <motion.button 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                >
                  Logout
                </motion.button>
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <motion.button 
                    className="btn btn-outline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign In
                  </motion.button>
                </Link>
                <Link href="/auth/signup">
                  <motion.button 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;