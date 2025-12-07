import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export default function LoginPage() {
    const navigate = useNavigate(); 

  
    const handleCoordinatorLogin = () => {
    navigate('/product-list');
  };
  
  return (
    <div className="login-page">
      {/* Back button */}
      <a href="/" className="back-btn">
        <span className="arrow">←</span> Back
      </a>

      <div className="login-container">
        {/* Login Card */}
        <div className="login-card">
          <h1>Log in as</h1>

          <div className="login-options">
            <a href="#" className="login-btn hcmut">
              Khách hàng
            </a>

            <button className="login-btn admin" onClick={handleCoordinatorLogin}>
              Admin
            </button>
          </div>

          <a href="/forgot-password" className="forgot-link">Quên mật khẩu?</a>
        </div>
      </div>
    </div>);
}
