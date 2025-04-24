import React, { useState, useEffect } from 'react';
import './CharacterDetails.css';

// Fondos épicos para luchador
const FIGHTER_BACKGROUNDS = [
  'linear-gradient(135deg, #001f3f 0%, #003366 100%)', // Azul oscuro suave
  'linear-gradient(135deg, #003366 0%, #ffc300 50%, #ff6f00 100%)', // Azul a amarillo y naranja
  'linear-gradient(135deg, #ffffff 0%, #f4f4f4 100%)', // Blanco con toque metálico
  'linear-gradient(135deg, #003366 0%, #ff6f00 100%)'  // Azul oscuro a naranja
];

const CharacterDetail = ({ character }) => {
  const [currentBg, setCurrentBg] = useState(FIGHTER_BACKGROUNDS[0]);
  const [isGlowing, setIsGlowing] = useState(false);

  // Cambio automático cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      const availableBgs = FIGHTER_BACKGROUNDS.filter(bg => bg !== currentBg);
      setCurrentBg(availableBgs[Math.floor(Math.random() * availableBgs.length)]);
      triggerGlow();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentBg]);

  const triggerGlow = () => {
    setIsGlowing(true);
    setTimeout(() => setIsGlowing(false), 1000);
  };

  return (
    <div 
      className={`fighter-card ${isGlowing ? 'power-up' : ''}`}
      style={{ background: currentBg }}
      onClick={triggerGlow}
    >
      <div className="fighter-image-container">
        <div className="energy-pulse"></div>
        <img 
          src={character.image} 
          alt={character.name} 
          className="fighter-avatar"
        />
        <div className="power-level-badge">
          <span>KI</span>
          <strong>{character.ki}</strong>
        </div>
      </div>

      <div className="fighter-stats">
        <h2 className="fighter-name">
          <span>{character.name}</span>
          <div className="name-underline"></div>
        </h2>
        
        <div className="stats-grid">
          <StatItem label="RAZA" value={character.race} icon="🧬" />
          <StatItem label="GÉNERO" value={character.gender} icon="⚧️" />
          <StatItem label="KI MÁX" value={character.maxKi} icon="💥" />
          <StatItem label="BANDO" value={character.affiliation} icon="🏷️" />
          
          <div className="ki-meter-container">
            <div className="ki-label">
              <span>PODER ACTUAL</span>
              <span>{character.ki}/{character.maxKi}</span>
            </div>
            <div className="ki-meter">
              <div 
                className="ki-fill" 
                style={{ width: `${(character.ki / character.maxKi) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="fighter-bio">
          <p>{character.description}</p>
        </div>
      </div>
    </div>
  );
};

const StatItem = ({ label, value, icon }) => (
  <div className="stat-item">
    <div className="stat-header">
      <span className="stat-icon">{icon}</span>
      <span className="stat-label">{label}</span>
    </div>
    <span className="stat-value">{value}</span>
  </div>
);

export default CharacterDetail;