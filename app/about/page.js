'use client';

import { motion } from 'framer-motion';
import ThreeBackground from '../../components/ThreeBackground';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
import AnimatedSection from '../../components/AnimatedSection';

export default function About() {
  const team = [
    { name: "Xiao Ro", role: "Founder & Creator", bio: "Passionate about creating engaging content and building communities." },
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
              About NexBlog
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Learn about our mission and the team behind our platform
            </motion.p>
          </div>
        </AnimatedSection>
        
        <AnimatedSection delay={0.4} className="page-content">
          <div className="container">
            <div className="about-content">
              <div className="about-section">
                <h2>Our Story</h2>
                <p>
                  NexBlog was born from a simple idea: to create a beautiful, modern platform for writers 
                  to share their stories and for readers to discover inspiring content. We believe that 
                  everyone has a story worth telling, and we're building the tools to make that possible.
                </p>
                <p>
                  Founded in 2023, our platform combines cutting-edge technology with elegant design 
                  to create an exceptional reading and writing experience.
                </p>
              </div>
              
              <div className="about-section">
                <h2>Our Mission</h2>
                <p>
                  We're on a mission to empower creators and connect people through meaningful content. 
                  We believe in the power of stories to inspire, educate, and bring people together.
                </p>
                <p>
                  Our platform is designed to be accessible to everyone, from seasoned writers to those 
                  just starting their writing journey.
                </p>
              </div>
              
              <div className="about-section">
                <h2>Meet the Team</h2>
                <div className="team-grid">
                  {team.map((member, index) => (
                    <motion.div 
                      key={member.name}
                      className="team-member"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    >
                      <div className="member-avatar">
                        <div className="avatar-placeholder"></div>
                      </div>
                      <h3>{member.name}</h3>
                      <p className="role">{member.role}</p>
                      <p className="bio">{member.bio}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <Footer />
    </div>
  );
}