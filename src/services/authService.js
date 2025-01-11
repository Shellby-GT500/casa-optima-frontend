import api from './api';

// Serviço de login
export const login = async (email, password) => {
  const response = await api.post('/login', { email, password });
  return response.data.token;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
