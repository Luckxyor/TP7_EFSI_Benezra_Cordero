import React, { useState, useEffect } from 'react';
import { celulares } from '../../data';
import CardCelular from '../../components/CardCelular';
import './Home.css';

const Home = () => {
  const [celularesAleatorios, setCelularesAleatorios] = useState([]);

  useEffect(() => {
    const celularesMezclados = [...celulares].sort(() => 0.5 - Math.random());
    setCelularesAleatorios(celularesMezclados.slice(0, 6));
  }, []);

  return (
    <>
      <h1 className="titulo-bienvenida">Bienvenido al TP 7</h1>

      <div id="carouselRandom" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {celulares.map((celular, indice) => (
            <div key={celular.id} className={`carousel-item ${indice === 0 ? 'active' : ''}`}>
              <img src={celular.fotos[0]} className="d-block w-100" alt={celular.nombre} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselRandom" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselRandom" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>

      <h2 className="subtitulo-destacados">Celulares destacados</h2>
      <div className="lista-productos">
        {celularesAleatorios.map((celular) => (
          <CardCelular key={celular.id} {...celular} />
        ))}
      </div>
    </>
  );
};

export default Home;
