import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/courses'); // Redireciona para a página de cursos
  };

  return (
    <div className="w-80 mx-auto border rounded-lg p-4 shadow-md bg-white">
      <img src={course.image} alt={course.title} className="w-full h-40 object-cover mb-4 rounded" />
      <h2 className="text-lg font-bold">{course.title}</h2>
      <p className="text-sm text-gray-600">{course.description}</p>
      <button
        onClick={handleLearnMore}
        className="bg-gradient-to-r from-orange-400 to-red-500 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transform transition duration-300"
      >Saber Mais</button>
    </div>
  );
};

export default CourseCard;
