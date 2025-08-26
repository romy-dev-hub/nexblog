// contexts/AuthContext.js
'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { db } from '@/utils/database';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app load
    const user = typeof window !== 'undefined' ? 
      JSON.parse(localStorage.getItem('current_user') || 'null') : 
      null;
      
    if (user) {
      setCurrentUser(user);
    }
    setLoading(false);
  }, []);

  const signup = (email, password, name) => {
    const user = db.users.create({ email, password, name });
    if (typeof window !== 'undefined') {
      localStorage.setItem('current_user', JSON.stringify(user));
    }
    setCurrentUser(user);
    return user;
  };

  const login = (email, password) => {
    const user = db.users.findByEmail(email);
    if (user && user.password === password) {
      if (typeof window !== 'undefined') {
        localStorage.setItem('current_user', JSON.stringify(user));
      }
      setCurrentUser(user);
      return user;
    }
    throw new Error('Invalid email or password');
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('current_user');
    }
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    signup,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}