import React from "react";
import PropTypes from "prop-types";
import "./Testimonio.css"; // Asegúrate de tener un archivo CSS para los estilos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Testimonio({ nombre, imagenPerfil, comentario, calificacion }) {
  return (
    <div className="testimonio">
      <div className="imagen-perfil">
        <img src={imagenPerfil} alt={`Perfil de ${nombre}`} />
      </div>
      <p className="comentario">{comentario}</p>
      <div className="calificacion">
        {Array.from({ length: calificacion }).map((_, index) => (
          <FontAwesomeIcon key={index} icon={faStar} className="estrella" />
        ))}
      </div>
      <p className="nombre">{nombre}</p>
    </div>
  );
}

Testimonio.propTypes = {
  nombre: PropTypes.string.isRequired,
  imagenPerfil: PropTypes.string.isRequired,
  comentario: PropTypes.string.isRequired,
  calificacion: PropTypes.number.isRequired,
};

export default Testimonio;
