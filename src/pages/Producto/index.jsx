import React from 'react';
import { useParams } from 'react-router-dom';
import { celulares } from '../../data';
import './producto.css';


const Producto = () => {
  const { idCelular } = useParams();
  const celular = celulares.find(c => c.id === parseInt(idCelular));

  if (!celular) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h1>{celular.nombre}</h1>
      <div className="product-photos">
        {celular.fotos.map((foto, index) => (
          <img key={index} src={foto} alt={`${celular.nombre} ${index + 1}`} />
        ))}
      </div>
      <p>{celular.descripcion}</p>
      <p>Precio: ${celular.precio}</p>
    </div>
  );
};

export default Producto;
