import React from "react";
import { motion } from "framer-motion";

const SuccessMessage = () => (
  <motion.div
    className="fixed top-10 right-10 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.3 }}
  >
    <p>Inscrição realizada com sucesso!</p>
  </motion.div>
);

export default SuccessMessage;
