'use client';

import { motion } from 'framer-motion';
import ThreeBackground from '../../components/ThreeBackground';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import AnimatedSection from '../../components/AnimatedSection';

export default function Categories() {
  const categories = [
    { name: "Technology", count: 12, color: "#6366f1" },
    { name: "Design", count: 8, color: "#ec4899" },
    { name: "Business", count: 6, color: "#10b981" },
    { name: "Lifestyle", count: 9, color: "#f59e0b" },
    { name: "Travel", count: 7, color: "#3b82f6" },
    { name: "Food", count: 11, color: "#ef4444" },
  ];

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
              Browse by Category
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Find content that matches your interests
            </motion.p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4} className="page-content">
          <div className="container">
            <div className="categories-grid">
              {categories.map((category, index) => (
                <motion.div 
                  key={category.name}
                  className="category-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  style={{ '--accent-color': category.color }}
                >
                  <div className="category-header">
                    <h3>{category.name}</h3>
                  </div>
                  <p>Explore the latest content in {category.name.toLowerCase()}</p>
                  <button className="btn btn-outline">Browse</button>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
}