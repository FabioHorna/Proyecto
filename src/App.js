import React from "react";
import Header from "./header/Header";
import Proveedor from "./components/Proveedor";
import Card from "./components/Card";
import Footer from "./footer/Footer";
import Testimonio from "./components/Testimonio";
import Producto from "./components/Producto";
import "./App.css";

function App() {
  // Datos de los productos
  const productos = [
    {
      nombre: "Producto 1",
      imagen: "/images/producto_1.jpg",
      descripcion: "Este es el primer producto para comparar.",
      calificacion: 4.5,
      precio: 199.99,
    },
    {
      nombre: "Producto 2",
      imagen: "/images/producto_2.jpg",
      descripcion: "Este es el segundo producto para comparar.",
      calificacion: 3.8,
      precio: 149.99,
    },
  ];

  // Determinar el producto con la calificación más alta
  const productoMejorCalificacion =
    productos[0].calificacion > productos[1].calificacion
      ? productos[0]
      : productos[1];

  return (
    <div className="App">
      <Header />
      <Card />
      <Proveedor />
      <Testimonio
        nombre="Carlos Bernal"
        imagenPerfil="/images/imagen_usuario_1.jpg"
        comentario="No creía encontrar el software que buscaba tan rápido. Estoy muy contento."
        calificacion={5}
      />
      <Testimonio
        nombre="Miriam Mendoza"
        imagenPerfil="/images/imagen_usuario_2.jpg"
        comentario="Me han estado llegando muchas peticiones últimamente, y ahora puedo vivir de esto. La plataforma es muy buena y ayuda e incentiva la sana competencia."
        calificacion={4}
      />
      <Testimonio
        nombre="Anyelo Vázquez"
        imagenPerfil="/images/imagen_usuario_3.jpg"
        comentario="¡Increíble! No puedo creer lo fácil que es comparar los precios. Esta función hace que los proveedores ofrezcan un mejor servicio."
        calificacion={5}
      />

      {/* Contenedor de productos */}
      <div className="productos-container">
              
        {/* Producto 2 */}
        <Producto
        imagen="public/images/Producto1.jpg"
        descripcion="Producto 1"
        calificacion={4}
        precio={199.99}
        esMejor={false}
      />
      <Producto
        imagen="public/images/Producto2.jpg"
        descripcion="Producto 2"
        calificacion={5}
        precio={149.99}
        esMejor={true} // Este producto tiene la mayor calificación
      />
      </div>

      <Footer />
    </div>
  );
}

export default App;
