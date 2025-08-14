// components/FloatingWhatsAppButton.tsx
import { FaWhatsapp } from 'react-icons/fa';

const FloatingWhatsAppButton = () => {
  const message = encodeURIComponent(
    `Hola, estoy interesado en una cotización para minisplit. ¿Me puedes dar más información?`
  );
  const phone = "521218634820"; // Reemplaza con tu número real

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-4 rounded-full shadow-lg z-50 flex items-center justify-center transition duration-300"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default FloatingWhatsAppButton;
