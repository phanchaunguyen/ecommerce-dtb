import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../components/Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
{ label: 'Tổng quan', path: '/admin-dashboard'},
    { label: 'Quản lý Sản phẩm', path: '/products' },
    { label: 'Quản lý Nhân viên', path: '/staff-list'},   
    { label: 'Hóa đơn & Doanh thu', path: '/invoices'},
  ] 

  return (
    <aside className="sidebar">

      <div className="logo">
        <span className="logo-bk">BK</span> <span className="logo-text">Shopping</span>
      </div>

      <div className="nav-menu">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </div>
        ))}
      </div>

      <div className="nav-bottom">
        <div className="nav-item">Cài đặt</div>
      </div>
    </aside>
  );
};

export default Sidebar;