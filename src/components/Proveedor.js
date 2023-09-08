import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Proveedor.css"; // Asegúrate de que la ruta sea correcta

function Proveedor() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Cantidad de imágenes a mostrar en cada vista
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Pantallas más pequeñas
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="proveedor">
      <h2>Nuestros Proveedores</h2>
      <Slider {...settings}>
      <div>
  <a href="URL_DE_TU_ENLACE">
    <img
      src="/images/Aws-Proveedor.jpg"
      alt="Proveedor 1"
      style={{ maxWidth: '100%', height: 'auto' }}
      className="imagen-resaltar"
    />
  </a>
</div>
<div>
  <a href="URL_DE_TU_ENLACE">
    <img
      src="/images/Google_Proveedor.jpg"
      alt="Proveedor 2"
      style={{ maxWidth: '100%', height: 'auto' }}
      className="imagen-resaltar"
    />
  </a>
</div>
<div>
  <a href="URL_DE_TU_ENLACE">
    <img
      src="/images/Microsoft_Proveedor.jpg"
      alt="Proveedor 3"
      style={{ maxWidth: '100%', height: 'auto' }}
      className="imagen-resaltar"
    />
  </a>
</div>


        {/* Agrega más imágenes y enlaces de proveedores aquí */}
      </Slider>
    </div>
  );
}

export default Proveedor;
