import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/ProductList.css';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Lỗi fetch API:", err);
        setLoading(false);
      });
  }, []);

  const formatMoney = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  };

  const renderStatus = (status) => {
    let className = 'status-badge ';
    if (status === 'Active') className += 'status-active';
    else if (status === 'Low Stock') className += 'status-draft';
    else className += 'status-scheduled'; 
    
    return <span className={className}>{status}</span>;
  };

  return (
    <div className="product-layout">
      <Sidebar />
      
      <div className="product-page-container">
        {/* Header */}
        <div className="page-header">
          <div>
            <h2 className="page-title">Danh sách sản phẩm</h2>
            <p style={{color: '#888', marginTop: '5px'}}>Quản lý kho hàng và giá cả</p>
          </div>
          
          <div className="header-actions">
            <button className="btn-secondary">⚙️ Bộ lọc</button>
            <button className="btn-primary" onClick={() => navigate('/add-product')}>
              + Thêm Sản Phẩm
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="table-container">
          {loading ? (
            <p>Đang tải dữ liệu...</p>
          ) : (
            <table className="custom-table">
              <thead>
                <tr>
                  <th style={{width: '50px'}}><input type="checkbox"/></th>
                  <th>Tên Sản Phẩm</th>
                  <th>Danh Mục</th>
                  <th>Giá Bán</th>
                  <th>Tồn Kho</th>
                  <th>Trạng Thái</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {products.map((item) => (
                  <tr key={item.IDSanPham}>
                    <td><input type="checkbox"/></td>
                    <td>
                      <div className="product-info-cell">
                        <img 
                          src="https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg" 
                          alt="product" 
                          className="product-img" 
                        />
                        <div>
                          <div className="product-name">{item.TenSanPham}</div>
                          <div className="product-sub">Mã: #{item.IDSanPham}</div>
                        </div>
                      </div>
                    </td>
                    <td>{item.Category}</td>
                    <td style={{fontWeight: 'bold'}}>{formatMoney(item.Gia)}</td>
                    <td>{item.Stock} cái</td>
                    <td>{renderStatus(item.Status)}</td>
                    <td>
                      <button className="action-btn">Chi tiết</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          
          <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '20px', gap: '10px'}}>
             <button className="btn-secondary" style={{padding: '5px 10px'}}>{'<'}</button>
             <button className="btn-secondary" style={{padding: '5px 10px', background: '#624BFF', color: 'white'}}>1</button>
             <button className="btn-secondary" style={{padding: '5px 10px'}}>2</button>
             <button className="btn-secondary" style={{padding: '5px 10px'}}>{'>'}</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductList;