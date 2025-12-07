import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/HomePage.css';

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  // Hiệu ứng hiện hero khi load trang
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStart = () => {
    navigate('/login');
  };

  

  return (
    <div className="homepage">
      <div className="hero-container">
        <div className="container">
          {/* Content Section */}
          <div className={`content ${isVisible ? 'visible' : ''}`}>

            <h1 className="title">
              Mua sắm <span className="highlight">thời thượng</span><br />
              Ăn diện <span className="highlight">sang chảnh</span>
            </h1>

            <p className="description">
              Là nhãn hiệu hàng đầu trong thời trang cao cấp, <br/>
              cho khách hàng những trải nghiệm sang trọng nhất.
            </p>

            <div className="buttons">
              <button
                onClick={handleStart}
                className="homepage-btn homepage-btn-primary"
              >
                Mua sắm ngay
              </button>
            </div>
          </div>

          {/* Illustration Section */}
          <div className={`illustration ${isVisible ? 'visible' : ''}`}>
            <img
              src="/images/home_model.png"
              alt="photo of a model"
              className="study-img"
            />
          </div>
        </div>
      </div>

    </div>
  );
}