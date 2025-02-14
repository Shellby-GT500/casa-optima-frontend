import React from "react";
import { motion } from "framer-motion";
import sulconesLogo from "../../assets/images/logo-sulcones-png.png";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Direitos reservados */}
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Casa Optima. Todos os direitos
          reservados.
        </p>

        <div className="text-right flex flex-col items-end">
        <img
            src={sulconesLogo}
            alt="Sulcones Logo"
            className="h-8 mx-auto md:mx-0 mb-2"
          />
          <p>Vilamoura - Quarteira, Algarve (Portugal)</p>
          <p>
            <a href="mailto:geral@sulcones.com" className="hover:underline">
              geral@sulcones.com
            </a>
          </p>
          <p>
            <a href="tel:+351289322584" className="hover:underline">
              00351 289 322 584
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
