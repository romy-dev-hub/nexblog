// utils/database.js

// Simple in-memory database (replace with real database in production)
let users = JSON.parse(localStorage.getItem('blog_users')) || [];
let blogPosts = JSON.parse(localStorage.getItem('blog_posts')) || [];

export const db = {
  // User methods
  users: {
    create: (userData) => {
      const user = {
        id: Date.now().toString(),
        ...userData,
        createdAt: new Date().toISOString()
      };
      users.push(user);
      localStorage.setItem('blog_users', JSON.stringify(users));
      return user;
    },
    
    findById: (id) => {
      return users.find(user => user.id === id);
    },
    
    findByEmail: (email) => {
      return users.find(user => user.email === email);
    },
    
    getAll: () => {
      return users;
    }
  },
  
  // Blog post methods
  posts: {
    create: (postData) => {
      const post = {
        id: Date.now().toString(),
        ...postData,
        createdAt: new Date().toISOString(),
        likes: 0,
        comments: []
      };
      blogPosts.push(post);
      localStorage.setItem('blog_posts', JSON.stringify(blogPosts));
      return post;
    },
    
    findById: (id) => {
      return blogPosts.find(post => post.id === id);
    },
    
    getAll: () => {
      return blogPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    
    getByAuthor: (authorId) => {
      return blogPosts.filter(post => post.authorId === authorId)
                     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },
    
    like: (id) => {
      const post = blogPosts.find(post => post.id === id);
      if (post) {
        post.likes += 1;
        localStorage.setItem('blog_posts', JSON.stringify(blogPosts));
      }
      return post;
    },
    
    addComment: (id, comment) => {
      const post = blogPosts.find(post => post.id === id);
      if (post) {
        post.comments.push({
          id: Date.now().toString(),
          ...comment,
          createdAt: new Date().toISOString()
        });
        localStorage.setItem('blog_posts', JSON.stringify(blogPosts));
      }
      return post;
    }
  }
};

// Initialize with some sample data if empty
if (blogPosts.length === 0) {
  db.posts.create({
    title: "Welcome to NexBlog",
    content: "This is your first blog post. You can edit or delete it from the admin panel.",
    excerpt: "Welcome to our blogging platform. Start sharing your stories with the world!",
    authorId: "system",
    authorName: "Admin",
    image: "/images/welcome.jpg"
  });
}