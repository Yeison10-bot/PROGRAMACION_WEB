// components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-brand">
          <span className="db-logo">DRAGON BALL</span>
          <span className="api-text">API</span>
        </div>

        {/* Menú Desktop */}
        <div className="navbar-links">
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/filter/Male" className="nav-link">Personajes Masculinos</Link>
          <Link to="/filter/Female" className="nav-link">Personajes Femeninos</Link>
          <Link to="/about" className="nav-link">Acerca de</Link>
        </div>

        {/* Hamburger Menu Mobile */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Menú Mobile */}
        <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Inicio</Link>
          <Link to="/filter/Male" className="mobile-link" onClick={() => setIsOpen(false)}>Masculinos</Link>
          <Link to="/filter/Female" className="mobile-link" onClick={() => setIsOpen(false)}>Femeninos</Link>
          <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>Acerca de</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;