// app/blog/[id]/page.js
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { db } from '@/utils/database';
import { motion } from 'framer-motion';
import { Calendar, User, Heart, MessageCircle } from 'lucide-react';

export default function BlogPost() {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState('');
  const [commentAuthor, setCommentAuthor] = useState('');

  useEffect(() => {
    const postData = db.posts.findById(params.id);
    setPost(postData);
    setLoading(false);
  }, [params.id]);

  const handleLike = () => {
    const updatedPost = db.posts.like(params.id);
    setPost(updatedPost);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment && commentAuthor) {
      const updatedPost = db.posts.addComment(params.id, {
        author: commentAuthor,
        content: comment
      });
      setPost(updatedPost);
      setComment('');
      setCommentAuthor('');
    }
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!post) {
    return <div className="error">Post not found</div>;
  }

  return (
    <div className="blog-post-page">
      <motion.article 
        className="blog-post"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="post-header">
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span><User size={16} /> {post.authorName}</span>
            <span><Calendar size={16} /> {new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="post-image">
          <img src={post.image || '/images/placeholder.jpg'} alt={post.title} />
        </div>
        
        <div className="post-content">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        
        <div className="post-actions">
          <button className="like-btn" onClick={handleLike}>
            <Heart size={20} /> {post.likes}
          </button>
        </div>
      </motion.article>
      
      <motion.section 
        className="comments-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h3>Comments ({post.comments.length})</h3>
        
        {post.comments.length > 0 ? (
          <div className="comments-list">
            {post.comments.map(comment => (
              <div key={comment.id} className="comment">
                <div className="comment-header">
                  <strong>{comment.author}</strong>
                  <span>{new Date(comment.createdAt).toLocaleDateString()}</span>
                </div>
                <p>{comment.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
        
        <form onSubmit={handleCommentSubmit} className="comment-form">
          <h4>Add a Comment</h4>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your Name"
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Your Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <MessageCircle size={16} /> Post Comment
          </button>
        </form>
      </motion.section>
    </div>
  );
}