import React, { useEffect, useState, useMemo } from 'react';
import { getCourses, createCourse, deleteCourse, updateCourse } from '../../services/courseService';
import CourseForm from '../../components/bo/CourseForm';
import Modal from '../../components/bo/EditarCourseModal';

const BackOfficePage = () => {
  const [courses, setCourses] = useState([]); // Lista de cursos
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura da modal
  const [selectedCourse, setSelectedCourse] = useState(null); // Estado para armazenar o curso selecionado

  useEffect(() => {
    getCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error('Erro ao buscar cursos:', err));
  }, []);

  const handleCreateCourse = (courseData) => {
    createCourse(courseData)
      .then((res) => {
        setCourses([...courses, res.data]);
      })
      .catch((err) => console.error('Erro ao criar curso:', err));
  };

  const handleUpdateCourse = (updatedCourse) => {

    console.log('Dados do curso atualizado:', updatedCourse);
  
    if (!updatedCourse._id) {
      console.error('Erro: O ID do curso está indefinido.');
      return;
    }
    updateCourse(updatedCourse._id, updatedCourse)
      .then((res) => {
        setCourses(courses.map((course) => (course._id === res.data._id ? res.data : course)));
        setIsModalOpen(false); // Fecha a modal
        setSelectedCourse(null); // Reseta o curso selecionado
      })
      .catch((err) => console.error('Erro ao atualizar curso:', err));
  };

  const handleDeleteCourse = (id) => {
    deleteCourse(id)
      .then(() => {
        setCourses(courses.filter((course) => course._id !== id));
      })
      .catch((err) => console.error('Erro ao apagar curso:', err));
  };

  const openEditModal = (course) => {
    setSelectedCourse(course); // Define o curso a ser editado
    setIsModalOpen(true); // Abre a modal
  };

  const initialData = useMemo(() => ({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    image: '',
  }), []);

  return (
    <div className="p-4 bg-white">
      <h1 className="text-2xl font-bold mb-4">Gestão de Cursos</h1>

      {/* Formulário para criar novos cursos */}
      <CourseForm onSubmit={handleCreateCourse} initialData={initialData} />

      {/* Lista de cursos */}
      <div>
        <h2 className="text-xl font-semibold mt-6">Cursos Existentes</h2>
        <ul>
          {courses.map((course) => (
            <li key={course._id} className="border p-4 mb-2">
              <h3 className="font-bold">{course.title}</h3>
              <p>{course.description}</p>
              <p>De: {new Date(course.startDate).toLocaleDateString()}</p>
              <p>Até: {new Date(course.endDate).toLocaleDateString()}</p>
              <img src={course.image} alt={course.title} width="200" />
              <button
                onClick={() => handleDeleteCourse(course._id)}
                className="bg-red-500 text-white p-2 m-2"
              >
                Apagar
              </button>
              <button
                onClick={() => openEditModal(course)}
                className="bg-blue-500 text-white p-2 m-2"
              >
                Editar
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal para editar curso */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CourseForm onSubmit={handleUpdateCourse} initialData={selectedCourse} />
        </Modal>
      )}
    </div>
  );
};

export default BackOfficePage;
