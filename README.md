3. Cấu hình kết nối
Mở file server.js, tìm biến dbConfig và cập nhật tài khoản SQL của máy bạn:

const dbConfig = {
    user: 'sa',             // Tên đăng nhập SQL của bạn
    password: 'yourPassword', // Mật khẩu SQL của bạn
    server: 'localhost',
    database: 'QuanLyCuaHangQuanAo',
    options: { encrypt: true, trustServerCertificate: true }
};


4. Cài đặt thư viện
Tại thư mục gốc, chạy lệnh:

npm install


▶️ Cách khởi chạy

Mở 2 Terminal riêng biệt để chạy song song:

Terminal 1 (Backend API):

node server.js

Terminal 2 (Frontend React):

npm start

Truy cập web tại: http://localhost:3000