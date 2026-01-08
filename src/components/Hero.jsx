import React from 'react';
import heroImage from '../assets/1.jpeg'; // Importas la imagen aquí
import { FaArrowRight } from 'react-icons/fa';
const Hero = () => {
  // Creamos el estilo de fondo dinámicamente
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.7), rgba(11, 17, 32, 0.7)), url(${heroImage})`,
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '100vh', 
    backgroundSize: 'cover',
    maxHeight: '100vh',
    display: 'flex',
    alignItems: 'center'
  };
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="hero" style={sectionStyle}>
      <div className="hero-text">
        <h1>Ingeniería y Construcción de Excelencia</h1>
          <p>
            Moll ONE somos una empresa constructora especializada en el cálculo, diseño, construcción, mantenimiento y refacción de estructuras en general. Nuestro compromiso es brindar soluciones innovadoras, seguras y eficientes que se adapten a las necesidades de cada cliente.
          </p>
            <button onClick={() => scrollToSection('servicios')} className="btn-cotizar">Ver nuestras obras<FaArrowRight /></button>

      </div>
    </section>
  );
}
export default Hero;