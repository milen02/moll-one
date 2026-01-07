import React from 'react';
import logo from '../assets/hero.jpg';

const Navbar = () => {
  // Función para bajar suavemente
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Moll ONE Logo" width="40" height="40" className="logo-img" />
        <div className="logo-text">
          <span className="brand-name">Moll ONE</span>
          <span className="brand-subtitle">Ingeniería y Construcción</span>
        </div>
      </div>

      <ul className="menu">
        {/* Cambiamos window.location por nuestra función scrollToSection */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-inicio">Inicio</button>

        <button onClick={() => scrollToSection('sobre-nosotros')} className="btn-nosotros">Nosotros</button>

        <button onClick={() => scrollToSection('servicios')} className="btn-servicios">Servicios</button>

        <button onClick={() => scrollToSection('proyectos')} className="btn-proyectos">¿Por qué elegirnos?</button>
      </ul>

      <button className="btn-contacto" onClick={() => scrollToSection('contacto')}>Contacto</button>
    </nav>
  );
};

export default Navbar;