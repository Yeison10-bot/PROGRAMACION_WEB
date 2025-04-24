import React from 'react'
import './ErrorPage.css'

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error-aura"></div>
      <div className="error-content">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">¡Kakarotto! Esta página no existe...</h2>
        <a href="/" className="back-home">Volver al inicio</a>
      </div>
    </div>
  )
}

export default ErrorPage
