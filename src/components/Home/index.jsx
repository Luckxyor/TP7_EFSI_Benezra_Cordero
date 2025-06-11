import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="text-center my-4 welcome-banner">Bienvenido al TP 7</h1>

      <div id="carouselRandom" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwxR2plMrWrCqlMvoWvSZpeyp-XRETYC9Vw&s" className="d-block w-100" alt="iPhone 14 Pro" />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRagJjMmCej8kcwjcT2EGxT5Jp7Q1QuNjtJcg&s" className="d-block w-100" alt="Samsung Galaxy S23" />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMC-juA7jJPPv1Ih3LRp0I7ZUFRAVgndTiA&s" className="d-block w-100" alt="Xiaomi 13 Pro" />
          </div>
          <div className="carousel-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9CAFCiyClAhZ430yhd1Q6lwfEgLrd3F_8mQ&s" className="d-block w-100" alt="Motorola Edge 40" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselRandom" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselRandom" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
};

export default Home;
