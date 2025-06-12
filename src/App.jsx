import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import QuienesSomos from './pages/QuienesSomos';
import ListaProductos from './pages/ListaProductos';
import Producto from './pages/Producto';
import Contacto from './pages/Contacto';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/productos" element={<ListaProductos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;