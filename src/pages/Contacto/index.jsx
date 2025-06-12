import React, { useState } from 'react';
import './contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulario enviado (simulado)');
  };

  return (
    <div>
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label><br />
          <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label><br />
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label>Mensaje:</label><br />
          <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
