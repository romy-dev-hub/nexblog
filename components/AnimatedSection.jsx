import { motion } from 'framer-motion';

const AnimatedSection = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;