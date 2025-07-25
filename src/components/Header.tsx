import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QuotationModal from './QuotationModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header
        id="inicio" 
        className="h-[90vh] bg-cover bg-center relative"
        style={{ backgroundImage: "url('/minisplit-banner.jpeg')" }}
      >
        {/* Overlay con degradado oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 z-10" />

        {/* Contenido encima del degradado */}
        <div className="absolute inset-0 flex items-center justify-center px-4 z-20">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Instalación Profesional de Aires Acondicionados
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Confort, eficiencia y tecnología al alcance de tu hogar o empresa.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full text-white font-semibold transition"
            >
              Solicita tu cotización
            </button>
          </motion.div>
        </div>
      </header>

      <AnimatePresence>
        {isModalOpen && <QuotationModal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
