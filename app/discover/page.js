'use client';

import { motion } from 'framer-motion';
import ThreeBackground from '../../components/ThreeBackground';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import AnimatedSection from '../../components/AnimatedSection';

export default function Discover() {
  return (
    <div className="container">
      <ThreeBackground />
      <Header />
      
      <main className="main">
        <AnimatedSection className="page-hero">
          <div className="container">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Discover Amazing Content
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore a wide range of topics and find content that inspires you.
            </motion.p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4} className="page-content">
          <div className="container">
            <div className="content-placeholder">
              <h2>Coming Soon</h2>
              <p>Our discovery features are currently in development. Soon you'll be able to:</p>
              <ul>
                <li>Browse articles by popularity</li>
                <li>Discover trending topics</li>
                <li>Find content based on your interests</li>
                <li>Follow your favorite writers</li>
              </ul>
              <p>Check back soon for these exciting features!</p>
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
}