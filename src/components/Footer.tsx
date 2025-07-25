import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const scrollTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Columna 1: Logo y dirección */}
        <div>
          <h3 className="text-2xl font-bold mb-2">O'Services</h3>
          <p className="text-sm text-gray-300">
            Instalación de Minisplits, Electricidad y Paneles Solares.
          </p>
          <p className="mt-2 text-sm text-gray-400">Xalapa, Veracruz</p>
        </div>

        {/* Columna 2: Navegación */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Navegación</h4>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => scrollTo("inicio")}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Inicio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("servicios")}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("productos")}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Productos
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollTo("testimonios")}
                className="text-gray-300 hover:text-white cursor-pointer"
              >
                Testimonios
              </button>
            </li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Síguenos</h4>
          <div className="flex space-x-4">
            <a
              href="https://wa.me/5212281234567"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 text-xl cursor-pointer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-xl cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-300 text-xl cursor-pointer"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
        © 2025 O'Services. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
