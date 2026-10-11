# Đề xuất cải tiến dự án

## 1. Cấu hình & Kiến trúc

- [ ] Tạo `src/config/api.js` hoặc file `.env` chứa `VITE_API_URL` để dùng chung cho tất cả Service, thay vì hardcode `http://localhost:3000`.
- [ ] Chuẩn hóa việc xử lý lỗi (Centralized Error Handling) ở tầng Service.

## 2. Hiệu năng & Quản lý vòng đời (DOM Lifecycle)

- [ ] Dọn dẹp bản đồ (`mapInstance.remove()`) khi chuyển trang khỏi route `#/locate-us` để tránh Memory Leak.
- [ ] Thay thế `setTimeout(100ms)` khởi tạo bản đồ bằng hook `onMounted` trong Router.
- [ ] Chuyển Leaflet từ link CDN `window.L` sang cài đặt qua npm (`npm install leaflet`).

## 3. Trải nghiệm người dùng (UX/UI)

- [ ] Áp dụng Debounce (khoảng 400ms - 500ms) cho các ô input tìm kiếm (Tra cứu bưu gửi, Tìm bưu cục) để người dùng gõ đến đâu lọc mượt đến đó.
- [ ] Thêm hiệu ứng Skeleton Loading (khung xám nhấp nháy) trong lúc chờ `json-server` phản hồi.
- [ ] Tối ưu responsive giao diện bản đồ và danh sách trên màn hình điện thoại (Mobile View).

## 4. Mở rộng tính năng tương lai

- [ ] Thêm tính năng định vị tự động vị trí người dùng (`navigator.geolocation`) để tự gợi ý bưu cục gần nhất.
- [ ] Lưu lịch sử các mã vận đơn đã tra cứu vào `localStorage` để người dùng không phải gõ lại.
