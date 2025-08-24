import { motion } from 'framer-motion';
import { User, LogIn } from 'lucide-react';

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
            NexBlog
          </motion.div>
          
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Discover</a>
            <a href="#">Categories</a>
            <a href="#">About</a>
          </div>
          
          <div className="auth-buttons">
            <motion.button 
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openAuthModal('login')}
            >
              <LogIn size={16} />
              Sign In
            </motion.button>
            
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openAuthModal('signup')}
            >
              <User size={16} />
              Sign Up
            </motion.button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;