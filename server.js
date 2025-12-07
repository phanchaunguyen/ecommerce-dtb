const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json());

const dbConfig = {
    user: 'sa',            
    password: 'Nguyen_Anh12',
    server: 'localhost',    
    database: 'QuanLyCuaHangQuanAo',
    options: {
        encrypt: true,
        trustServerCertificate: true 
    }
};

app.get('/api/products', async (req, res) => {
    try {
        let pool = await sql.connect(dbConfig);
        let result = await pool.request().query(`
            SELECT IDSanPham, TenSanPham, Category, Gia, Stock, Status 
            FROM v_DanhSachSanPham
            ORDER BY IDSanPham DESC
        `);
        
        res.json(result.recordset);
    } catch (err) {
        console.log(err);
        res.status(500).send('Lỗi kết nối Server: ' + err.message);
    }
});

app.get('/api/staff', async (req, res) => {
    try {
        let pool;
        try {
            pool = await sql.connect(dbConfig); 
        } catch (err) {
            pool = sql; 
        }
        let result = await pool.request().query(`
            SELECT 
                nv.IDNhanVien,
                nv.Ten AS TenNhanVien,       -- Đổi 'Ten' thành 'TenNhanVien' cho khớp React
                nv.SoDienThoai,
                nv.Email,
                nv.LoaiNhanVien AS ChucVu,   -- Đổi 'LoaiNhanVien' thành 'ChucVu'
                nv.TienLuongGoc AS Luong,    -- Đổi 'TienLuongGoc' thành 'Luong'
                cn.Ten AS ChiNhanh           -- Lấy tên chi nhánh từ bảng ChiNhanh
            FROM dbo.NhanVien nv
            LEFT JOIN dbo.ChiNhanh cn ON nv.IDChiNhanh = cn.IDChiNhanh
            ORDER BY nv.IDNhanVien ASC
        `);

        res.json(result.recordset);
    } catch (err) {
        console.log("Lỗi Server:", err);
        res.status(500).send('Lỗi lấy danh sách nhân viên: ' + err.message);
    }
});


const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});