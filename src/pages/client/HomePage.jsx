import React, { useEffect, useState } from "react"; 
import { getCourses } from "../../services/courseService";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CourseCard from "../../components/client/CourseCard";
import introImage from "../../assets/images/team-casa-optima.png";
import aboutUsImage from "../../assets/images/nosso-metodo.png";
import coursesImage from "../../assets/images/nossa-experiencia.png";
import banner from "../../assets/images/banner-casa-optima.png";
import marina from "../../assets/images/marina-vilamoura.png";
import { motion } from "framer-motion";

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  useEffect(() => {
    getCourses()
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Erro ao buscar cursos:", err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Slider Section */}
      <section className="bg-gradient-to-r from-white to-[#D2B48C] py-12">
        <motion.div
          className="container mx-auto px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {courses.length > 0 ? (
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={autoplayEnabled ? { delay: 3000 } : false}
              loop={true}
            >
              {courses.map((course) => (
                <SwiperSlide
                  key={course._id}
                  onMouseEnter={() => setAutoplayEnabled(false)}
                  onMouseLeave={() => setAutoplayEnabled(true)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <CourseCard course={course} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p className="text-center text-white">
              Nenhum curso disponível no momento.
            </p>
          )}
        </motion.div>
      </section>

      {/* Seção de Introdução */}
      <section className="bg-white py-16">
        <img
          src={banner}
          alt="Banner"
          className="mb-8 mx-auto"
        />
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-800"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            NOSSO MÉTODO
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            A Casa Optima Vilamoura adota um <b>método de ensino one-to-one</b>, com turmas restritas a um <b>número máximo de 6 alunos</b> e com <b>estações de trabalho individuais totalmente equipadas</b> para transformar a teoria em prática imediatamente. 
            Um ambiente completo com ferramentas multimédia, onde a interação entre professor e aluno, e entre os próprios alunos, é única.
          </motion.p>
        </div>
      </section>

      {/* Seção: Explore Nossos Cursos */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left md:mr-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              A Nossa experiência e a sua evolução.
            </h3>
            <p className="text-gray-600 mb-6">
              Esta é a filosofia da <b>Casa Optima® World School of Sweet Arts & Innovation.</b> 
              A escola para os profissionais do futuro com escritórios em todo o mundo. 
              A realidade formativa mais completa que oferece cursos de gelados, pastelaria e bebidas para todos os níveis, com professores qualificados e que adota um método individual. 
              Um viveiro criativo que lhe permite desenvolver a sua carreira como sempre desejou, sendo o trampolim para o seu sucesso. 
            </p>
            <a
              href="/courses"
              className="inline-block bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition"
            >
              Saiba mais
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={coursesImage}
              alt="Cursos"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Seção: Sobre Nós */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 text-center md:text-left md:ml-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              O nosso objetivo
            </h3>
            <p className="text-gray-600 mb-6">
              O objetivo principal da nossa escola não se trata apenas de ensinar a arte de fazer gelato, mas também de transmitir a cultura, o amor pelos ingredientes frescos e a técnica refinada que define o verdadeiro gelato. 
              Vamos partilhar o conhecimento com os apaixonados pela gastronomia, desde iniciantes até profissionais que desejam aperfeiçoar as suas habilidades.
            </p>
            <a
              href="/about"
              className="inline-block bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition"
            >
              Leia mais
            </a>
          </div>
          <div className="md:w-1/2">
            <img
              src={aboutUsImage}
              alt="Sobre Nós"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Seção: Junte-se à Nossa Comunidade */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left md:mr-8">
            <h4 className="text-3xl font-bold text-gray-800 mb-4">
              PENSAMOS EM TUDO
            </h4>
            <p className="text-gray-600 mb-6">
              Cada curso da Escola Casa Optima oferece aos seus participantes:
            </p>
            <h4 className="text-3xl font-bold text-gray-800 mb-4">
              KIT CASA OPTIMA
            </h4>
            <p className="text-gray-600 mb-6">
              Composto por: chapéu descartável de sorveteiro, jaqueta profissional de sorveteiro, shopper com bloco de notas e caneta, folhetos e apostilas;
            </p>
            <h4 className="text-3xl font-bold text-gray-800 mb-4">
              CERTIFICADO DE PARTICIPAÇÃO
            </h4>
            <p className="text-gray-600 mb-6">
              Será emitido no último dia disponível, para enriquecimento do seu Curriculum Vitae;
            </p>
            <h4 className="text-3xl font-bold text-gray-800 mb-4">
              ALMOÇO OFERECIDO
            </h4>
            <p className="text-gray-600 mb-6">
              Pela Casa Optima para todos os dias do curso.
            </p>
            <p className="text-gray-600 mb-6">
              "Em Portugal, precisavamos de criar um espaço onde fosse possível ensinar a cultura do gelado artesanal Italiano, e fazer as demonstrações das inúmeras novidades que são lançadas todos os anos, 
              Após uma parceria com mais de 25 anos não tive qualquer dúvida em abrir uma escola da Casa Optima em Viamoura, com a abertuda desta escola irá nos premitir ajudar muitos clientes e todas as pessoas com o desejo de se iniciar no mundo da Geladaria a conseguirem antigir o sucesso que desejam nos seus negócios. 
              Porque o sucesso dos nossos clientes, é também o nosso sucesso." <br /><br />

                -“Carlos Mendonça CEO SULCONES”
            </p>
            <a
              href="/contact"
              className="inline-block bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition mt-8"
            >
              Entre em contacto
            </a>
          </div>
          <div className="md:w-3/4">
            <img
              src={introImage}
              alt="Comunidade"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <img
              src={marina}
              alt="Comunidade"
              className="shadow-lg h-3/4 w-full"
      />
    </div>
  );
};

export default HomePage;
