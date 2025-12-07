import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from 'react-hot-toast';

const Layout = ({ children }) => {
  const location = useLocation();
  
  const hasNavbar = ["/", "/login"];
  const hasFooter = ["/", "/login"];
  
 const showNavbar = hasNavbar.includes(location.pathname);
  const showFooter = hasFooter.includes(location.pathname);

  return (
    <div>
      {showNavbar && <Navbar />}
      {children}
      {showFooter && <Footer />}
      <Toaster />
    </div>
  );
};

export default Layout;