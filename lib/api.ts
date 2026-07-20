import axios from 'axios';

const api = axios.create({
  // Он сам возьмет твою строчку из .env.local
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.fitoprotect.md/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Автоматически подставляем токен в каждый запрос, если он есть в localStorage
api.interceptors.request.use((config) => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;