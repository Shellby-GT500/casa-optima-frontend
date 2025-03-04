import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// Interceptor para adicionar o token ao cabeçalho
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // Obtém o token do localStorage
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
