// src/components/Navbar.tsx
import React from 'react';

const Navbar = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-6 py-3 flex justify-center space-x-8">
        <a
          href="#inicio"
          onClick={(e) => handleScroll(e, 'inicio')}
          className="hover:text-blue-600 font-semibold"
        >
          Inicio
        </a>
        <a
          href="#servicios"
          onClick={(e) => handleScroll(e, 'servicios')}
          className="hover:text-blue-600 font-semibold"
        >
          Servicios
        </a>
        <a
          href="#productos"
          onClick={(e) => handleScroll(e, 'productos')}
          className="hover:text-blue-600 font-semibold"
        >
          Productos
        </a>
        <a
          href="#testimonios"
          onClick={(e) => handleScroll(e, 'testimonios')}
          className="hover:text-blue-600 font-semibold"
        >
          Testimonios
        </a>
       
      </div>
    </nav>
  );
};

export default Navbar;
