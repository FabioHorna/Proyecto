import React from "react";
import "./Footer.css"; // Asegúrate de que la ruta sea correcta

function Footer() {
  return (
    <footer className="footer">
      <div className="left-section">
        <div className="nimbus-logo">
          <img src="/images/nimbus-logo.jpg" alt="Nimbus Logo" />
          <p>&copy; Nimbus 2023</p>
        </div>
      </div>
      <div className="right-section">
        <div className="social-icons">
          {/* Iconos de redes sociales con animaciones */}
          <a href="#" className="social-icon"><i className="fab fa-facebook"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
          <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="subscribe-form">
          <input type="email" placeholder="Ingresa tu correo electrónico" />
          <button>Submit</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

