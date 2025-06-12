import React from 'react';
import './QuienesSomos.css';

const QuienesSomos = () => {
  return (
    <div>
      <h1>Quienes Somos</h1>
      <p>Somos una empresa dedicada a la venta de celulares de alta calidad y tecnología avanzada.</p>
      <h2>Nuestras oficinas comerciales</h2>
      <div className="office-photos">
        <img src="https://via.placeholder.com/300x200?text=Oficina+1" alt="Oficina 1" />
        <img src="https://via.placeholder.com/300x200?text=Oficina+2" alt="Oficina 2" />
        <img src="https://via.placeholder.com/300x200?text=Oficina+3" alt="Oficina 3" />
      </div>
    </div>
  );
};

export default QuienesSomos;
