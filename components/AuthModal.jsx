import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, mode }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert(`Form submitted in ${mode} mode`);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={onClose}>
              <X size={20} />
            </button>
            
            <h2>{mode === 'login' ? 'Welcome Back' : 'Create Account'}</h2>
            
            <form onSubmit={handleSubmit}>
              {mode === 'signup' && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" required />
                </div>
              )}
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
              </div>
              
              <button type="submit" className="btn btn-primary form-submit">
                {mode === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            </form>
            
            <p style={{ marginTop: '1rem', textAlign: 'center', color: 'var(--gray)' }}>
              {mode === 'login' ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => mode === 'login' ? onClose() : onClose()} 
                style={{ 
                  background: 'none', 
                  border: 'none', 
                  color: 'var(--primary)', 
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                {mode === 'login' ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;