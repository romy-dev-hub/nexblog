import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BlogCard = ({ post, index }) => {
  return (
    <motion.div 
      className="blog-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <div className="card-image">
        <img src={post.image || '/images/placeholder.jpg'} alt={post.title} />
      </div>
      
      <div className="card-content">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
        
        <div className="card-footer">
          <div className="author">
            <div className="avatar">
              <img src={post.author.avatar} alt={post.author.name} />
            </div>
            <span>{post.author.name}</span>
          </div>
          
          <div className="post-meta">
            <span><Calendar size={14} /> {post.date}</span>
          </div>
        </div>
      </div>
      
      <motion.div 
        className="read-more"
        whileHover={{ x: 5 }}
      >
        Read More <ArrowRight size={16} />
      </motion.div>
    </motion.div>
  );
};

export default BlogCard;