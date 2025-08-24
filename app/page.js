'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import AuthModal from '../components/AuthModal';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setAuthModalOpen(false);
  };

  return (
    <div className="container">
      <ThreeBackground />
      <Header openAuthModal={openAuthModal} />
      
      <main className="main">
        <AnimatedSection className="hero">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Share Your Story with the World
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              A modern blogging platform with immersive visuals and seamless interactions. 
              Join our community of writers and readers today.
            </motion.p>
            
            <motion.button 
              className="btn btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openAuthModal('signup')}
            >
              Start Reading
            </motion.button>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.6} className="cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Be the First to Share Your Story</h2>
              <p>
                Our community is just getting started, and we're looking for passionate writers 
                to share their ideas and experiences. Join us today and become one of our founding authors.
              </p>
              <div className="cta-buttons">
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => openAuthModal('signup')}
                >
                  Sign Up to Write
                </motion.button>
                <motion.button 
                  className="btn btn-outline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.8} className="features-section">
          <div className="container">
            <h2>Why Choose NexBlog?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">✨</div>
                <h3>Beautiful Design</h3>
                <p>Experience a visually stunning blogging platform with smooth animations.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🚀</div>
                <h3>Fast Performance</h3>
                <p>Built with Next.js for lightning-fast page loads and optimal performance.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🎨</div>
                <h3>Easy to Use</h3>
                <p>Simple and intuitive interface that makes writing and reading enjoyable.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
      
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={closeAuthModal} 
        mode={authMode} 
      />
    </div>
  );
}