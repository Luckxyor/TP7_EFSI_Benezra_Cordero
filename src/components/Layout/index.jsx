import {Link, Outlet} from "react-router-dom";
import './layout.css'

const Layout=()=>{
    return(
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/quienes-somos">Quienes somos</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/contacto">Quienes somos</Link>
            </nav>
            <Outlet/>
            <footer>
                <p>hecho por 2 pelotudos</p>
            </footer>
        </>
    )
}

export default Layout;