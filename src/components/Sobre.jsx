import React from 'react';
import { FaBullseye, FaShieldAlt, FaLightbulb } from 'react-icons/fa';

const Sobre = () => {
  return (
    <section id="sobre-nosotros" className="nosotros-section">
      <div className="nosotros-header">
        <h2>Sobre Nosotros</h2>
        <p>
          En Moll ONE, transformamos ideas en estructuras sólidas y duraderas, 
          respaldados por años de experiencia en el sector de la construcción.
        </p>
      </div>

      <div className="nosotros-grid">
        {/* Nuestra Misión */}
        <div className="nosotros-item    "data-aos="fade-right">
          <div className="icon-wrapper bg-blue-light">
            <FaBullseye className="icon-blue" />
          </div>
          <h3>Nuestra Misión</h3>
          <p>Proporcionar servicios de ingeniería y construcción de la más alta calidad, superando las expectativas de nuestros clientes.</p>
        </div>

        {/* Compromiso */}
        <div className="nosotros-item" data-aos="fade-right">
          <div className="icon-wrapper bg-green-light">
            <FaShieldAlt className="icon-green" />
          </div>
          <h3>Compromiso</h3>
          <p>Cumplimiento estricto de normas técnicas y de seguridad en cada proyecto que emprendemos.</p>
        </div>

        {/* Innovación */}
        <div className="nosotros-item" data-aos="fade-right">
          <div className="icon-wrapper bg-blue-light">
            <FaLightbulb className="icon-blue" />
          </div>
          <h3>Innovación</h3>
          <p>Soluciones innovadoras y eficientes que se adaptan a las necesidades específicas de cada cliente.</p>
        </div>
      </div>
    </section>
  );
};

export default Sobre;