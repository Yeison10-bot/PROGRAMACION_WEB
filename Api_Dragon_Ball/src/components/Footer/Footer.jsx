import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="db-footer">
      <div className="footer-content">
        {/* Sección superior */}
        <div className="footer-top">
          <div className="footer-section">
            <h3 className="footer-title">Esferas del Dragón</h3>
            <div className="dragon-balls">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="db-sphere" style={{ '--star-color': i === 3 ? '#FFD700' : '#fff' }}>
                  <div className="star">★</div>
                </div>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Navegación</h3>
            <ul className="footer-links">
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/filter/Male">Personajes Masculinos</Link></li>
              <li><Link to="/filter/Female">Personajes Femeninos</Link></li>
              <li><Link to="/about  ">Acerca de</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-title">Conéctate</h3>
            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisora */}
        <div className="footer-divider">
          <div className="kamehameha-wave"></div>
        </div>

        {/* Sección inferior */}
        <div className="footer-bottom">
          <div className="footer-logo">
            <span className="db-logo">DB</span>
            <span className="api-text">API</span>
          </div>
          <div className="legal-info">
            <p>© 2024 Dragon Ball API. No afiliado a Toei Animation.</p>
            <p>Datos proporcionados por <a href="https://dragonball-api.com" target="_blank" rel="noopener noreferrer">dragonball-api.com</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;