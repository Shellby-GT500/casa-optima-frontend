import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-png.png';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-white to-[#D2B48C] shadow-lg py-6 sticky top-0 z-50">
      <motion.div
        className="container mx-auto px-4 flex justify-between items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */} 
        <Link to="/" className="flex items-center">
          <motion.img
            src={logo}
            alt="Casa Optima Logo"
            className="h-20 w-20 mr-4"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.h1
            className="text-3xl font-bold text-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Casa Optima
          </motion.h1>
        </Link>

        {/* Navigation Menu */}
        <nav className="space-x-12 flex-grow flex justify-center">
          <Link
            to="/"
            className="text-lg font-semibold text-white hover:text-yellow-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/courses"
            className="text-lg font-semibold text-white hover:text-yellow-300 transition duration-300"
          >
            Cursos
          </Link>
          <Link
            to="/about"
            className="text-lg font-semibold text-white hover:text-yellow-300 transition duration-300"
          >
            Sobre Nós
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition duration-300"
          >
            <i className="fab fa-facebook text-2xl"></i>
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
