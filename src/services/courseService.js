import api from './api';

// Obter todos os cursos
export const getCourses = () => api.get('/getCourses');

// Criar um novo curso
export const createCourse = (courseData) => api.post('/createCourse', courseData);

// Update um curso
export const updateCourse = (id, courseData) => api.put(`/updateCourse/${id}`, courseData);

// Apagar um curso
export const deleteCourse = (id) => api.delete(`/deleteCourse/${id}`);
