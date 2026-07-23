'use client';

import { useState, useEffect } from 'react';
import api from '@/lib/api';

export interface User {
  id: number;
  email: string;
  username: string;
  role: 'buyer' | 'seller';
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('access_token');

      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const res = await api.get('/users/me/');
        setUser(res.data);
      } catch {
        // Если токен протух — чистим
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const logout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    setUser(null);
    window.location.href = '/login';
  };

  return {
    user,
    loading,
    isGuest: !user && !loading,
    isBuyer: user?.role === 'buyer',
    isSeller: user?.role === 'seller',
    logout,
  };
}