import React from "react";
import PropTypes from "prop-types";
import "./Producto.css"; // Asegúrate de que la ruta sea correcta

function Producto({ imagen, descripcion, calificacion, precio, esMejor }) {
  const productoClase = esMejor ? "producto producto-mejor" : "producto";

  return (
    <div className={productoClase}>
      <div className="imagen">
        <img src={imagen} alt={descripcion} />
      </div>
      <div className="descripcion">
        <p>{descripcion}</p>
        <div className="calificacion">
          {Array.from({ length: calificacion }).map((_, index) => (
            <span key={index} className="estrella">
              &#9733;
            </span>
          ))}
        </div>
        <p className="precio">${precio}</p>
      </div>
    </div>
  );
}

Producto.propTypes = {
  imagen: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  calificacion: PropTypes.number.isRequired,
  precio: PropTypes.number.isRequired,
  esMejor: PropTypes.bool, // Indica si es el producto con la mayor calificación
};

export default Producto;
