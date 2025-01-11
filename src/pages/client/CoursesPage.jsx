import React, { useEffect, useState } from 'react';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/getCourses')
      .then((response) => response.json())
      .then((data) => setCourses(data))
      .catch((error) => console.error('Erro ao buscar cursos:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Cursos</h1>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <p>De: {new Date(course.startDate).toLocaleDateString()}</p>
            <p>Até: {new Date(course.endDate).toLocaleDateString()}</p>
            <img src={course.image} alt={course.title} width="200" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CoursesPage;
