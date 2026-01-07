import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const Wa = () => {
  const irAWhatsapp = () => {
    const telefono = "59162697577";
    const mensaje = encodeURIComponent("Hola Moll ONE, me gustaría solicitar información.");
    window.open(`https://wa.me/${telefono}?text=${mensaje}`, '_blank');
  };

  return (
    <div className="whatsapp-float" onClick={irAWhatsapp}>
      <FaWhatsapp />
    </div>
  );
};

export default Wa; // <--- Asegúrate de que NO tenga llaves aquí