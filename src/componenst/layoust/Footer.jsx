// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css'; // Asegúrate de que los estilos estén correctos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Mi Tienda. Todos los derechos reservados.</p>
        <p>Contacto: info@mitienda.com</p>
        <p>Dirección: Calle Ficticia 123, Ciudad Ejemplo, País</p>
        <p>
          <strong>¡Gracias por visitar nuestra tienda!</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
