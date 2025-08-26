// utils/database.js

// Helper function to safely access localStorage
const getStorageItem = (key, defaultValue = []) => {
  if (typeof window === 'undefined') {
    return defaultValue;
  }
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.error('Error accessing localStorage:', error);
    return defaultValue;
  }
};

// Helper function to safely set localStorage items
const setStorageItem = (key, value) => {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error('Error setting localStorage:', error);
  }
};

// Simple in-memory database (replace with real database in production)
let users = getStorageItem('blog_users', []);
let blogPosts = getStorageItem('blog_posts', []);

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
      setStorageItem('blog_users', users);
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
      setStorageItem('blog_posts', blogPosts);
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
        setStorageItem('blog_posts', blogPosts);
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
        setStorageItem('blog_posts', blogPosts);
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