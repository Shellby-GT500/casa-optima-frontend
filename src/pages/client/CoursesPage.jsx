import React, { useEffect, useState } from "react";
import { getCourses } from "../../services/courseService";
import RegistrationModal from "../../components/client/RegisterModal";
import { registerUser } from "../../services/registrationService";
import { motion } from "framer-motion";
import SuccessMessage from "../../components/client/SuccessMessage";

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [successMessage, setSuccessMessage] = useState(false);


  useEffect(() => {
    getCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Erro ao buscar cursos:", err));
  }, []);

  const handleRegister = (data) => {
    registerUser(data)
      .then(() => {
        setSuccessMessage(true); 
        setTimeout(() => setSuccessMessage(false), 3000); 
        setSelectedCourse(null);
      })
      .catch((err) => {
        console.error("Erro ao registrar:", err);
        alert("Erro ao registrar. Tente novamente.");
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-white to-[#D2B48C]">
      {/* Header Section */}
      <header className="text-center py-8">
        <motion.h1
          className="text-4xl font-bold text-orange-700"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore Nossos Cursos
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Descubra a arte do gelato artesanal com os melhores cursos da Casa Optima.
        </motion.p>
      </header>

      {/* Courses Grid */}
      <main className="container mx-auto px-6 py-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {courses.map((course, index) => (
            <motion.div
              key={course._id}
              className="bg-white border rounded-lg shadow-lg p-6 flex flex-col items-start hover:shadow-xl hover:scale-105 transition-transform"
              initial={{ scale: 0.9, opacity: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-orange-600 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Data de Início:</strong>{" "}
                {new Date(course.startDate).toLocaleDateString()}
              </p>
              <button
                onClick={() => setSelectedCourse(course)}
                className="mt-auto bg-gradient-to-r from-orange-400 to-pink-500 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:shadow-xl"
              >
                Inscrever-me
              </button>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Registration Modal */}
      {selectedCourse && (
        <RegistrationModal
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onRegister={handleRegister}
        />
      )}
       {/* Success Message */}
    {successMessage && <SuccessMessage />}
    </div>
  );
};

export default CoursesPage;
