'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import BlogCard from '../components/BlogCard';
import AuthModal from '../components/AuthModal';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  
  // Sample blog data
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Next.js",
      excerpt: "Learn how to create modern web applications with Next.js and React.",
      image: "/images/blog1.jpg",
      date: "May 15, 2023",
      author: {
        name: "Alex Johnson",
        avatar: "/images/avatar1.jpg"
      }
    },
    {
      id: 2,
      title: "The Power of Three.js in Web Development",
      excerpt: "Discover how to create stunning 3D visuals for your websites using Three.js.",
      image: "/images/blog2.jpg",
      date: "June 2, 2023",
      author: {
        name: "Maria Chen",
        avatar: "/images/avatar2.jpg"
      }
    },
    {
      id: 3,
      title: "Mastering Framer Motion Animations",
      excerpt: "Create smooth, engaging animations that will delight your users.",
      image: "/images/blog3.jpg",
      date: "June 10, 2023",
      author: {
        name: "David Wilson",
        avatar: "/images/avatar3.jpg"
      }
    }
  ];

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
        
        <AnimatedSection delay={0.6} className="blog-section">
          <div className="container">
            <h2>Latest Articles</h2>
            
            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
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