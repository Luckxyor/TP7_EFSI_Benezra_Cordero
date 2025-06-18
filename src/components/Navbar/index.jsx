import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import { marcas } from "../../data";

const Navbar = () => {
  const [mostrarDesplegable, setMostrarDesplegable] = useState(false);

  return (
    <nav className="barra-navegacion">
      <span className="logo-navegacion">CelularesYA</span>
      <Link to="/" className="enlace-navegacion">Inicio</Link>
      <Link to="/quienes-somos" className="enlace-navegacion">Quiénes somos</Link>
      <div
        className="desplegable-productos"
        onMouseEnter={() => setMostrarDesplegable(true)}
        onMouseLeave={() => setMostrarDesplegable(false)}
      >
        <span className="boton-desplegable">
          Productos ▼
        </span>
        {mostrarDesplegable && (
          <div className="menu-desplegable">
            <Link
              to="/productos"
              className="item-desplegable"
              onClick={() => setMostrarDesplegable(false)}
            >
              Ver todos
            </Link>
            {marcas.map((marca) => (
              <Link
                key={marca.id}
                to={`/productos/${marca.id}`}
                className="item-desplegable"
                onClick={() => setMostrarDesplegable(false)}
              >
                {marca.nombre}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link to="/contacto" className="enlace-navegacion">Contacto</Link>
    </nav>
  );
};

export default Navbar;