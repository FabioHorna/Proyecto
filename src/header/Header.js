import React from "react";
import "./Header.css"; // Asegúrate de que la ruta sea correcta

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="/images/nimbus-logo.jpg" alt="Nimbus Logo" />
      </div>
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <a href="/">Inicio</a>
          </li>
          <li className="menu-item">
            <a href="/about">Acerca de</a>
          </li>
          <li className="menu-item">
            <a href="/services">Servicios</a>
          </li>
          <li className="menu-item">
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="login-register">
        <button className="login-button">Login</button>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}

export default Header;
