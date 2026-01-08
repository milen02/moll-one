import React from 'react';
import logo from '../assets/2.jpeg';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="footer-logo" />
            <span className="footer-brand-name">Moll ONE</span>
          </div>
          <p>Soluciones innovadoras, seguras y eficientes en ingeniería y construcción que se adaptan a las necesidades de cada cliente.</p>
          <div className="social-icons">
            <FaFacebook /> <FaTwitter /> <FaLinkedin /> <FaInstagram />
          </div>
        </div>

        <div className="footer-links">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li>Inicio</li>
            <li>Nosotros</li>
            <li>Servicios</li>
            <li>Contacto</li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Servicios</h4>
          <ul>
            <li>Cálculo Estructural</li>
            <li>Diseño</li>
            <li>Construcción</li>
            <li>Mantenimiento</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Moll ONE - Ingeniería y Construcción. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; // <--- ¡ESTO ES LO QUE FALTA!