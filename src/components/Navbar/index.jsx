import { Link } from "react-router-dom";
import { useState } from "react";
import "./navbar.css";
import { marcas } from "../../data";

const Navbar=()=>{
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };  
    return(
        <nav>
        <Link to="/">Home</Link>
        <Link to="/quienes-somos">Quienes somos</Link>
        <div 
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
          style={{ display: "inline-block", position: "relative" }}
        >
          <span 
            onClick={toggleDropdown} 
            style={{ cursor: "pointer", padding: "0 10px" }}
          >
            Productos ▼
          </span>
          {showDropdown && (
            <div 
              className="dropdown-menu" 
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                backgroundColor: "white",
                border: "1px solid #ccc",
                padding: "5px 0",
                zIndex: 1000,
                minWidth: "150px"
              }}
            >
              <Link 
                to="/productos" 
                className="dropdown-item" 
                style={{ display: "block", padding: "5px 15px", textDecoration: "none", color: "black" }}
              >
                Ver todos
              </Link>
              {marcas.map((marca) => (
                <Link 
                  key={marca.id} 
                  to={`/productos/${marca.id}`} 
                  className="dropdown-item" 
                  style={{ display: "block", padding: "5px 15px", textDecoration: "none", color: "black" }}
                >
                  {marca.nombre}
                </Link>
              ))}
            </div>
          )}
        </div>
        <Link to="/contacto">Contacto</Link>
      </nav>
    )
}
export default Navbar