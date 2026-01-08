import React from 'react';
// Importamos Swiper y sus estilos
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import imgCalculo from '../assets/11.png';
import imgDiseno from '../assets/12.png';
import imgConstruccion from '../assets/13.png'; 
import imgMantenimiento from '../assets/14.png';
import imgRefaccion from '../assets/muro.jpeg';
import imgestructuras from '../assets/vista.jpeg';
import imgGeneral from '../assets/general.jpeg';
import img1 from '../assets/5.png';
import img2 from '../assets/6.jpg';
import img3 from '../assets/7.jpg';
import img4 from '../assets/8.jpg';
import img6 from '../assets/10.jpg';


const Pro = () => {
  const listaProyectos = [
     { image: imgGeneral },
     { image: img1 },
    { image: img2 },
    { image: img3 },
    { image: img4 },
    { image: img6 },
     { image: imgCalculo },
    { image: imgDiseno },
    { image: imgConstruccion },
    { image: imgMantenimiento },
    { image: imgRefaccion },
    { image: imgestructuras },
   
    
  ];

  return (
    <section id="pro" className="pro-section">
      <div className="section-title">
        <h2>Nuestros Proyectos</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20} // Espacio entre cards
        slidesPerView={1} // Por defecto 1 en móvil
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          // Ajustes según el tamaño de pantalla
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 4 }
        }}
        className="pro-swiper"
      >
        {listaProyectos.map((p, i) => (
          <SwiperSlide key={i}>
            <div className="pro-card">
              <div className="card-image-wrapper">
                <img src={p.image} alt={`Proyecto ${i}`} />
                <div className="card-overlay">
                   {/* Aquí puedes añadir un botón de "Ver más" si gustas */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Pro;