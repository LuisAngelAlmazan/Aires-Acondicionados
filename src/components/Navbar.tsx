// src/components/Navbar.tsx
'use client';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Cierra el menú en móvil al dar clic
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-xl font-bold">O'Services</div>

        {/* Botón de menú hamburguesa (solo visible en móvil) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Links (desktop y mobile) */}
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } absolute top-full left-0 w-full bg-white md:static md:flex md:items-center md:space-x-8 md:w-auto`}
        >
          {['Inicio', 'Servicios', 'Productos', 'Testimonios'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              onClick={(e) => handleScroll(e, label.toLowerCase())}
              className="block px-6 py-3 md:p-0 hover:text-blue-600 font-semibold"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
