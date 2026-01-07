import React from 'react';
import { FaUsers, FaCheckCircle, FaChartLine, FaLeaf } from 'react-icons/fa';
import heroImage from '../assets/r.png';

const Proyectos = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(11, 17, 32, 0.85), rgba(11, 17, 32, 0.85)), url(${heroImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 1, // Capa base
    width: '100%'
  };

  const razones = [
    { 
      titulo: "Equipo de profesionales especializados", 
      desc: "Contamos con un equipo altamente calificado y con amplia experiencia en el sector.",
      icon: <FaUsers />
    },
    { 
      titulo: "Experiencia en proyectos diversos", 
      desc: "Proyectos de pequeña, mediana y gran escala en diversos sectores industriales.",
      icon: <FaChartLine />
    },
    { 
      titulo: "Cumplimiento de normas", 
      desc: "Cumplimiento estricto de normas técnicas y de seguridad en todos nuestros proyectos.",
      icon: <FaCheckCircle />
    },
    { 
      titulo: "Calidad y sostenibilidad", 
      desc: "Compromiso con la calidad, la eficiencia y la sostenibilidad en cada proyecto.",
      icon: <FaLeaf />
    }
  ];

  return (
    <section id="proyectos" className="elegirnos-section" style={sectionStyle}>
      {/* Contenedor con z-index alto para forzar visibilidad */}
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: '1200px' }}>
        
        <div className="elegirnos-header">
          <h2>¿Por qué elegir Moll ONE?</h2>
          <p>Somos su socio ideal para proyectos de construcción e ingeniería</p>
        </div>

        <div className="elegirnos-grid">
          {razones.map((item, index) => (
            <div key={index} className="elegirnos-card">
              <div className="icon-box">{item.icon}</div>
              <div className="card-content">
                <h3>{item.titulo}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Proyectos;