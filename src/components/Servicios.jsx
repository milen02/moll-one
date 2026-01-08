import React from 'react';
import imgCalculo from '../assets/6.jpg';
import imgDiseno from '../assets/5.png';
import imgConstruccion from '../assets/r.png'; 
import imgMantenimiento from '../assets/8.jpg';
import imgRefaccion from '../assets/7.jpg';
import imgestructuras from '../assets/10.jpg';

const Servicios = () => {
  const listaServicios = [
    { 
      title: "Cálculo Estructural", 
      image: imgCalculo, 
      desc: "Análisis y cálculo preciso de estructuras para garantizar seguridad." 
    },
    { 
      title: "Diseño", 
      image: imgDiseno, 
      desc: "Diseño arquitectónico y estructural adaptado a sus necesidades." 
    },
    { 
      title: "Construcción", 
      image: imgConstruccion, 
      desc: "Ejecución de proyectos con los más altos estándares de calidad." 
    },
    { 
      title: "Mantenimiento", 
      image: imgMantenimiento, 
      desc: "Servicios de mantenimiento preventivo y correctivo." 
    },
    { 
      title: "Refacción", 
      image: imgRefaccion, 
      desc: "Refacción y remodelación de estructuras existentes."
    },

    {
      title: "Estructuras generales", 
      image: imgestructuras, 
      desc: "Proyectos de pequeña ,media y gran escala." 
    }
  ];

  return (
    <section id="servicios" className="servicios-section">
      <div className="section-title">
        <h2>Nuestros Servicios</h2>
        <p>Ofrecemos una amplia gama de servicios especializados en ingeniería y construcción.</p>
      </div>
      <div className="servicios-grid">
        {listaServicios.map((s, i) => (
          <div key={i} className="servicio-card" data-aos="zoom-in">
            {/* Contenedor de la imagen de fondo */}
            <div className="card-image-bg">
              <img src={s.image} alt={s.title} />
              <div className="card-overlay"></div>
              
            </div>
            
            <div className="card-info">
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;