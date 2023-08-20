import { Outlet } from "react-router-dom";
import "./SharedLayout.scss"

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const SharedLayout = () => {
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
};

export default SharedLayout;