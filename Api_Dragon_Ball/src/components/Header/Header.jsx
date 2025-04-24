import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      const mobileImage = 'https://external-preview.redd.it/cZfBg78yb1ZUweJT2enTiNL5N_XHPmE8w8h067Atkeg.jpg?width=640&crop=smart&auto=webp&s=aba7f50f08471339f1644646db5bf2b61d8e41d9'; // imagen optimizada para móvil
      const desktopImage = 'https://images6.alphacoders.com/772/thumb-1920-772376.jpg';
      setBgImage(window.innerWidth <= 480 ? mobileImage : desktopImage);
    };

    handleResize(); // Ejecuta una vez al montar

    window.addEventListener('resize', handleResize); // Escucha redimensionamientos
    return () => window.removeEventListener('resize', handleResize); // Limpia el listener
  }, []);

  return (
    <header className="db-header">
      <div 
        className="header-bg" 
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <div className="db-logo">
        <span className="logo-text">Dragon Ball Z</span>
        <div className="energy-pulse"></div>
      </div>
    </header>
  );
};

export default Header;

