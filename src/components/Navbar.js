import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
       <div className="navbar__brand">BK<span className="navbar__subtitle">Shopping</span></div> 
      
      <ul className="navbar__menu">
        <li><Link to="/">Trang chủ</Link></li>
        <li><Link to="/services">Sản Phẩm</Link></li>
        <li><Link to="/about">Về chúng tôi</Link></li>
      </ul>
      <div className="navbar__login">
        <Link to='/cart' className="navbar__login-btn">🛒</Link>
        <Link to="/login" className="navbar__login-btn">Đăng nhập</Link>
      </div>
    </nav>
  );
};

export default Navbar;
