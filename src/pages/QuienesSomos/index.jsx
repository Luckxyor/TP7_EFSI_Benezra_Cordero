import React from 'react';
import './quienesSomos.css';

const QuienesSomos = () => {
  return (
    <div className="contenedor-quienes">
      <h1>Quiénes Somos</h1>
      <p>
        Somos una empresa dedicada a la venta de celulares de alta calidad y tecnología avanzada.
      </p>
      <h2>Nuestras oficinas comerciales</h2>
      <div className="fotos-oficinas">
        <img src="https://img.global.news.samsung.com/ar/wp-content/uploads/2022/08/5-422x563.jpeg" alt="Oficina 1" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZJg6MsHRXWd5NCQ63O24NdtSKZ55pNGMlqg&s" alt="Oficina 2" />
        <img src="https://dplnews.com/wp-content/uploads/2019/12/bancos-telecomunicaciones.jpg" alt="Oficina 3" />
      </div>
    </div>
  );
};

export default QuienesSomos;
