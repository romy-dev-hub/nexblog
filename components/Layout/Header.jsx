import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = ({ openAuthModal }) => {
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
            <motion.button 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openAuthModal('login')}
            >
              Sign In
            </motion.button>
            
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openAuthModal('signup')}
            >
              Sign Up
            </motion.button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;