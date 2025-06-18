import { Link } from "react-router-dom";
import "./card-celular.css";

const CardCelular = (celular) => {
return (
            <div key={celular.id} className="tarjeta-producto">
                <Link to={`/producto/${celular.id}`} className="enlace-producto">
                <img src={celular.fotos[0]} alt={celular.nombre} className="imagen-producto" />
                <h3 className="nombre-producto">{celular.nombre}</h3>
                </Link>
                <p className="descripcion-producto">{celular.descripcion}</p>
                <p className="precio-producto">Precio: ${celular.precio}</p>
            </div>
    )
}

export default CardCelular;