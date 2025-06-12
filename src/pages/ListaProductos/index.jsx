import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { celulares, marcas } from '../../data';
import './listaProductos.css';


const ListaProductos = () => {
  const { idMarca } = useParams();

  const filteredCelulares = idMarca
    ? celulares.filter(celular => celular.marcaId === parseInt(idMarca))
    : celulares;

  const marcaNombre = idMarca
    ? marcas.find(marca => marca.id === parseInt(idMarca))?.nombre
    : null;

  return (
    <div>
      <h1>{marcaNombre ? `Celulares de ${marcaNombre}` : 'Todos los celulares'}</h1>
      <div className="product-list">
        {filteredCelulares.map(celular => (
          <div key={celular.id} className="product-card">
            <Link to={`/producto/${celular.id}`}>
              <img src={celular.fotos[0]} alt={celular.nombre} />
              <h3>{celular.nombre}</h3>
            </Link>
            <p>{celular.descripcion}</p>
            <p>Precio: ${celular.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;
