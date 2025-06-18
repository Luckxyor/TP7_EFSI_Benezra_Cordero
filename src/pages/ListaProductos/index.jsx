import React from 'react';
import { useParams } from 'react-router-dom';
import { celulares, marcas } from '../../data';
import CardCelular from '../../components/CardCelular';
import './listaProductos.css';

const ListaProductos = () => {
  const { idMarca } = useParams();

  let celularesFiltrados = celulares;
  let nombreMarca = null;

  if (idMarca) {
    const idMarcaNumero = parseInt(idMarca);
    celularesFiltrados = celulares.filter(function(celular) {
      return celular.marcaId === idMarcaNumero;
    });

    for (let i = 0; i < marcas.length; i++) {
      if (marcas[i].id === idMarcaNumero) {
        nombreMarca = marcas[i].nombre;
        break;
      }
    }
  }

  return (
    <div className="contenedor-lista-productos">
      <h1 className="titulo-lista-productos">
        {nombreMarca ? `Celulares de ${nombreMarca}` : 'Todos los celulares'}
      </h1>
      <div className="lista-productos">
        {celularesFiltrados.map((celular) => (
          <CardCelular key={celular.id} {...celular} />
        ))}
      </div>
    </div>
  );
};

export default ListaProductos;
