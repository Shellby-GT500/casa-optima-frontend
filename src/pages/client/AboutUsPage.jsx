import React from "react";
import formazioneImage from "../../assets/images/Formazione.png";
import partnershipImage from "../../assets/images/inauguração.png";
import loja from "../../assets/images/loja.png";
import { motion } from "framer-motion";
import gelatos from "../../assets/images/gelatos-v2.png";

const AboutUsPage = () => {
  const sections = [
    {
      title: "Quem Somos",
      text: (
        <>
          Apresentar ao mundo a cultura do gelato artesanal é a nossa missão e
          temos o orgulho de anunciar que no dia <strong>8 de outubro</strong>{" "}
          foi inaugurada a primeira sede portuguesa da Casa Optima School, em
          parceria com a Sulcones, distribuidora MEC3 para Portugal.
        </>
      ),
      image: partnershipImage,
    },
    {
      title: "Missão e Visão",
      text: (
        <>
          Uma escola que responde às necessidades de formação de Profissionais
          portugueses e espanhóis, onde se ensina a arte de fazer verdadeiro
          gelato artesanal italiano. Localizada em{" "}
          <strong>Vilamoura - Quarteira, no Algarve</strong>, a escola foi
          equipada com <strong>6 postos de trabalho individuais</strong> para
          aplicar o método one-to-one.
        </>
      ),
      image: loja,
    },
    {
      title: "Nossa Experiência",
      text: (
        <>
          Esta escola tem bastante experiência e os formandos saem daqui com
          mais capacidade para os seus negócios, oferecendo mais qualidade aos
          seus clientes, que é o nosso principal objetivo. Quem já sabe melhora
          a sua maneira de trabalhar. Quem pensa em abrir um espaço de geladaria
          pode vir aqui experimentar. <strong>Fazer gelados é uma arte</strong> e é
          preciso ter gosto.
        </>
      ),
      image: gelatos,
    },
    {
      title: "Primeiro Curso",
      text: (
        <>
          O primeiro curso programado foi o <strong>ABC do Gelato</strong>. Este
          curso de primeiro nível é destinado a todos aqueles que desejam
          iniciar uma carreira profissional neste maravilhoso setor. Novas datas
          e novos tipos de cursos irão enriquecer o calendário de formação ao
          longo de 2025.
        </>
      ),
      image: formazioneImage,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-200">
      {/* Header Section */}
      <header className=" text-center">
        <motion.h1
          className="text-4xl font-bold text-black"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Sobre Nós
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-black"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Conheça mais sobre a Casa Optima e nossa missão de transformar sonhos
          em realidade.
        </motion.p>
      </header>

      {/* Content Sections */}
      <main className="flex-grow">
        {sections.map((section, index) => (
          <motion.section
            key={index}
            className={`container mx-auto px-6 py-12 flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            {/* Image */}
            <motion.img
              src={section.image}
              alt={section.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />

            {/* Text */}
            <div className="flex-1 md:ml-8 md:mr-8 text-lg text-gray-800">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p>{section.text}</p>
            </div>
          </motion.section>
        ))}
      </main>
    </div>
  );
};

export default AboutUsPage;
