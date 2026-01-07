import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // ¡No olvides los estilos!

// Importa tus componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sobre from './components/Sobre';
import Servicios from './components/Servicios';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import Proyectos from './components/Proyectos';
import Wa from './components/Wa';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      once: true,     // La animación solo ocurre una vez al bajar
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Sobre />
      <Proyectos />
      <Servicios />
      <Wa />
      <Footer />
      
    </div>
  );
}

export default App;