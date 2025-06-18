import './contacto.css';

const Contacto = () => {

  return (
    <div className="contacto-container">
      <div className="contact-card">
        <h1>Contacto</h1>
        <form>
          <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea name="mensaje" rows={5} required />
          </div>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
