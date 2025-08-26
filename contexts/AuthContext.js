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
    const user = JSON.parse(localStorage.getItem('current_user'));
    if (user) {
      setCurrentUser(user);
    }
    setLoading(false);
  }, []);

  const signup = (email, password, name) => {
    const user = db.users.create({ email, password, name });
    localStorage.setItem('current_user', JSON.stringify(user));
    setCurrentUser(user);
    return user;
  };

  const login = (email, password) => {
    const user = db.users.findByEmail(email);
    if (user && user.password === password) {
      localStorage.setItem('current_user', JSON.stringify(user));
      setCurrentUser(user);
      return user;
    }
    throw new Error('Invalid email or password');
  };

  const logout = () => {
    localStorage.removeItem('current_user');
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