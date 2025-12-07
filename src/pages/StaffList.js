import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../styles/ProductList.css'; 

const StaffList = () => {
  const navigate = useNavigate();
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  // Gọi API lấy nhân viên
  useEffect(() => {
    fetch('http://localhost:5000/api/staff')
      .then(res => res.json())
      .then(data => {
        setStaff(data);
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

  const renderRoleBadge = (role) => {
    let style = { padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' };
    
    switch(role) {
      case 'Quản lý':
        style = { ...style, backgroundColor: '#E8FAF0', color: '#0F9D58' }; // Xanh lá
        break;
      case 'Thu ngân':
        style = { ...style, backgroundColor: '#F0F4FF', color: '#624BFF' }; // Xanh dương
        break;
      case 'Bán hàng':
        style = { ...style, backgroundColor: '#FFF4E5', color: '#FF9800' }; // Cam
        break;
      default:
        style = { ...style, backgroundColor: '#F5F5F5', color: '#666' }; // Xám
    }
    return <span style={style}>{role}</span>;
  };

  return (
    <div className="product-layout">
      <Sidebar />
      
      <div className="product-page-container">
        {/* Header */}
        <div className="page-header">
          <div>
            <h2 className="page-title">Quản lý Nhân sự</h2>
            <p style={{color: '#888', marginTop: '5px'}}>Danh sách nhân viên và bảng lương</p>
          </div>
          
          <div className="header-actions">
            <button className="btn-secondary">Xuất Excel</button>
            <button className="btn-primary" onClick={() => navigate('/add-staff')}>
              + Thêm Nhân Viên
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
                  <th style={{width: '50px'}}>ID</th>
                  <th>Họ và Tên</th>
                  <th>Liên hệ</th>
                  <th>Chức vụ</th>
                  <th>Chi Nhánh</th>
                  <th>Lương Cơ Bản</th>
                  <th>Hành Động</th>
                </tr>
              </thead>
              <tbody>
                {staff.map((nv) => (
                  <tr key={nv.IDNhanVien}>
                    <td>#{nv.IDNhanVien}</td>
                    <td>
                      <div className="product-info-cell">
                        <img 
                          src={`https://i.pravatar.cc/150?u=${nv.IDNhanVien}`} 
                          alt="avatar" 
                          className="product-img"
                          style={{borderRadius: '50%'}} 
                        />
                        <div>
                          <div className="product-name">{nv.TenNhanVien}</div>
                          <div className="product-sub">{nv.Email || 'Chưa cập nhật email'}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                        <div style={{fontSize: '14px', color: '#333'}}>{nv.SoDienThoai}</div>
                    </td>
                    <td>{renderRoleBadge(nv.ChucVu)}</td>
                    <td>{nv.ChiNhanh}</td>
                    <td style={{fontWeight: 'bold', color: '#333'}}>{formatMoney(nv.Luong)}</td>
                    <td>
                      <button className="action-btn">Sửa</button>
                      <button className="action-btn" style={{color: '#dc3545', marginLeft: '10px'}}>Xóa</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default StaffList;