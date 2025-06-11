import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import QuienesSomos from './components/QuienesSomos';
import ListaProductos from './components/ListaProductos';
import Producto from './components/Producto';
import Contacto from './components/Contacto';
import Home from './components/Home';

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