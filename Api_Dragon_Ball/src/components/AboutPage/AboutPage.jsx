import React from 'react'
import './AboutPage.css'
import id1 from '../img/id_1.jpg';

const AboutPage = () => {
  const fotos = [
    id1
  ];

  return (
    <div className="melo-container">
      <div className="floating-fotos">
        {fotos.map((foto, index) => (
          <div 
            key={index}
            className="foto-melo"
            style={{ '--i': index }}
          >
            <img src={foto} alt={`Foto ${index}`} />
            <div className="glow"></div>
          </div>
        ))}
      </div>

      <div className="info-melo">
        <div className="melo-header">
          <h1>Yeison Rojas</h1>
          <div className="dragon-marca"></div>
        </div>

        <div className="detalles-melo">
          <div className="dato-item">
            <span className="dato-titulo">CARRERA</span>
            <span className="dato-valor">Ingenieria de Sistemas</span>
          </div>
          
          <div className="dato-item">
            <span className="dato-titulo">Universidad</span>
            <span className="dato-valor">Universidad de la Amazonia</span>
          </div>
          
          <div className="dato-item">
            <span className="dato-titulo">CONTACTO</span>
            <span className="dato-valor">yeiso.rojas@udla.edu.co</span>
          </div>
        </div>

        <div className="onda-ki"></div>
      </div>
    </div>
  )
}

export default AboutPage