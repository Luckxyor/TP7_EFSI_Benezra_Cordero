import { Outlet } from "react-router-dom";
import './layout.css'
import Navbar from "../Navbar";
import Footer from "../Footer";


const Layout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;
