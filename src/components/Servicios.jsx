import React from 'react';
import { FaCalculator, FaPenNib, FaHammer, FaWrench, FaSync, FaBuilding } from 'react-icons/fa';

const Servicios = () => {
  const listaServicios = [
    { title: "Cálculo Estructural", icon: <FaCalculator />, desc: "Análisis y cálculo preciso de estructuras para garantizar seguridad." },
    { title: "Diseño", icon: <FaPenNib />, desc: "Diseño arquitectónico y estructural adaptado a sus necesidades." },
    { title: "Construcción", icon: <FaHammer />, desc: "Ejecución de proyectos con los más altos estándares de calidad." },
    { title: "Mantenimiento", icon: <FaWrench />, desc: "Servicios de mantenimiento preventivo y correctivo." },
    { title: "Refacción", icon: <FaSync />, desc: "Renovación y modernización de estructuras existentes." },
    { title: "Estructuras Generales", icon: <FaBuilding />, desc: "Proyectos de pequeña, mediana y gran escala." },
  ];

  return (
    <section id="servicios" className="servicios-section">
      <div className="section-title">
        <h2>Nuestros Servicios</h2>
        <p>Ofrecemos una amplia gama de servicios especializados en ingeniería y construcción.</p>
      </div>
      <div className="servicios-grid">
        {listaServicios.map((s, i) => (
          <div key={i} className="servicio-card" data-aos="zoom-in ">
            <div className="servicio-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Servicios; // <--- ESTA LÍNEA CORRIGE TU ERROR