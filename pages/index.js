import { useState } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import ThreeBackground from '../components/ThreeBackground';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import BlogCard from '../components/BlogCard';
import AuthModal from '../components/AuthModal';

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  
  // Sample blog data - in a real app, this would come from a database
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
    // Add more posts as needed
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
      <Head>
        <title>NexBlog - Modern Blog Platform</title>
        <meta name="description" content="A modern blogging platform with immersive visuals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThreeBackground />
      <Header openAuthModal={openAuthModal} />
      
      <main className="main">
        <section className="hero">
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
        </section>
        
        <section className="blog-section">
          <div className="container">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Latest Articles
            </motion.h2>
            
            <div className="blog-grid">
              {blogPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          </div>
        </section>
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