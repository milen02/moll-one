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
  const abrirWhatsapp = () => {
    const telefono = "59162697577";
    const mensaje = encodeURIComponent("Hola Moll ONE, vengo desde el sitio web y me gustaría solicitar una cotización.");
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
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
     <button className="btn-contacto-nav" onClick={abrirWhatsapp}>
        Contacto
      </button>
      
    </nav>
  );
};

export default Navbar;