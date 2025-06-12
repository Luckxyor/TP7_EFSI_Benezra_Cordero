import React, { useState, useEffect } from 'react';
import { celulares } from '../../data';
import './Home.css';

const Home = () => {
  const [randomPhones, setRandomPhones] = useState([]);

  useEffect(() => {
    const shuffled = [...celulares].sort(() => 0.5 - Math.random());
    setRandomPhones(shuffled.slice(0, 6));
  }, []);

  return (
    <div className="home-container">
      <h1 className="text-center my-4 welcome-banner">Bienvenido al TP 7</h1>

      <div id="carouselRandom" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {celulares.map((celular, index) => (
            <div key={celular.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
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

      <h2 className="mt-5">Celulares destacados</h2>
      <div className="random-phones">
        {randomPhones.map((phone) => (
          <div key={phone.id} className="phone-card">
            <img src={phone.fotos[0]} alt={phone.nombre} />
            <h3>{phone.nombre}</h3>
            <p>{phone.descripcion}</p>
            <p>Precio: ${phone.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
