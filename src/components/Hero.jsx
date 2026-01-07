import React from 'react';
import heroImage from '../assets/g.png'; // Importas la imagen aquí
import { FaArrowRight } from 'react-icons/fa';
const Hero = () => {
  // Creamos el estilo de fondo dinámicamente
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.7), rgba(11, 17, 32, 0.7)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '80vh', 
    display: 'flex',
    alignItems: 'center'
    
  }

  return (
    <section className="hero" style={sectionStyle}>
      <div className="hero-text">
        <h1>Ingeniería y Construcción de Excelencia</h1>
          <p>
            Moll ONE somos una empresa constructora especializada en el cálculo, diseño, construcción, mantenimiento y refacción de estructuras en general. Nuestro compromiso es brindar soluciones innovadoras, seguras y eficientes que se adapten a las necesidades de cada cliente.
          </p>
          <button className="btn-cotizar">
            Solicitar Cotización <FaArrowRight />
          </button>
      </div>
    </section>
  );
}
export default Hero;