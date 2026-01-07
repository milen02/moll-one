import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

const Contacto = () => {
  const form = useRef();
  const [enviando, setEnviando] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setEnviando(true);

    emailjs.sendForm(
      'service_s325nds',   // Reemplaza con tu Service ID
      'template_q2spgso',  // Reemplaza con tu Template ID
      form.current,
      'yviWOfxWW-66Vr9sx'    // Reemplaza con tu Public Key
    )
    .then((result) => {
        alert("¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.");
        form.current.reset(); // Limpia el formulario
    }, (error) => {
        alert("Hubo un error al enviar el mensaje, por favor intenta de nuevo.");
    })
    .finally(() => {
        setEnviando(false);
    });
  };

  return (
    <section id="contacto" className="contacto-section">
      <form ref={form} onSubmit={sendEmail} className="contacto-form">
        <input type="text" name="user-name" placeholder="Nombre completo" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="text" name="phone" placeholder="Teléfono" required />
        <textarea name="message" placeholder="Cuéntenos sobre su proyecto..." required></textarea>
        
        <button type="submit" className="btn-enviar" disabled={enviando}>
          {enviando ? 'Enviando...' : (
            <>
              Enviar Mensaje <FaPaperPlane />
            </>
          )}
        </button>
      </form>
    </section>
  );
};

export default Contacto;