# 📱 Vertical Video Feed (TikTok/Reels Clone)

Dự án này là một bài test thực hành xây dựng giao diện cuộn video dọc tương tự như TikTok hoặc Instagram Reels, được tối ưu hóa trải nghiệm người dùng (UX) và thiết kế đáp ứng (Responsive Design) cho cả Mobile và PC.

## 🚀 Liên kết Demo (Quan trọng)

- **🌍 Live Demo (Vercel):** [https://test-nguyenxuandatj-xxx.vercel.app](https://test-nguyenxuandat-204.vercel.app/)
- **🎬 Video Demo (Google Drive):** [Xem video trải nghiệm thực tế tại đây](https://drive.google.com/file/d/1FO3ARfrvXDyCnMRbY0XeGE4vny_925kU/view)

## 🛠 Công nghệ sử dụng

- **Framework:** Next.js 14 (App Router)
- **Ngôn ngữ:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Quản lý State & DOM:** React Hooks (`useState`, `useEffect`, `useRef`)
- **API Trình duyệt:** Intersection Observer API

## ✨ Tính năng nổi bật

### A. Tính năng cốt lõi (Core Features)
- **Vertical Scroll Layout:** Sử dụng kỹ thuật `CSS Scroll Snap` (`snap-y`, `snap-mandatory`) để tạo cảm giác cuộn mượt mà, dừng khựng chính xác ở từng video chiếm toàn bộ màn hình (tỷ lệ 9:16).
- **Video Player Component:** Giao diện lớp phủ (overlay) hiển thị thông tin tác giả, mô tả và các nút tương tác.
- **Click to Play/Pause:** Người dùng có thể click trực tiếp vào video để phát hoặc tạm dừng. Hiển thị icon Play trực quan giữa màn hình khi video đang dừng.
- **Mock Data:** Dữ liệu giả định được định nghĩa kiểu (Type) rõ ràng bằng TypeScript.

### B. Tính năng nâng cao (Bonus Features)
- **State Mạng Xã Hội:** Nút "Tim" (Like) có thể click để đổi trạng thái màu đỏ và cập nhật số lượng yêu thích theo thời gian thực (ngăn chặn sự kiện click lan truyền bằng `e.stopPropagation()`).
- **Responsive Navigation:** Thanh điều hướng tự động thay đổi theo kích thước màn hình (Sidebar bên trái cho PC và Bottom Navigation Bar ở dưới đáy cho Mobile).
- **Auto-Play on Scroll:** Video tự động phát khi lọt vào khung hình và tự động dừng khi bị cuộn qua.

---

## 🧠 Giải thích Logic Auto-Play khi cuộn trang

Để xử lý tính năng tự động Play/Pause khi người dùng cuộn trang, dự án sử dụng **Intersection Observer API** kết hợp với `useEffect` và `useRef` trong React.

**Cách hoạt động chi tiết:**
1. **Tham chiếu (Refs):** Sử dụng `containerRef` để trỏ vào thẻ `div` bọc ngoài cùng của mỗi component video và `videoRef` để trỏ vào thẻ `<video>`.
2. **Khởi tạo Observer:** Trong `useEffect`, một `IntersectionObserver` được tạo ra để theo dõi `containerRef`. 
3. **Cấu hình Threshold:** Thuộc tính `threshold: 0.6` được thiết lập, nghĩa là hàm callback sẽ được kích hoạt khi ít nhất 60% diện tích của component video xuất hiện trên viewport (khung hình người dùng).
4. **Xử lý sự kiện (Callback):**
   - Nếu `entry.isIntersecting` trả về `true` (video đã lọt vào khung hình trên 60%): Gọi hàm `videoRef.current.play()` để video tự động phát.
   - Nếu `entry.isIntersecting` trả về `false` (video bị cuộn ra ngoài): Gọi hàm `videoRef.current.pause()` để dừng video, giúp tiết kiệm tài nguyên trình duyệt và tránh việc nhiều video phát âm thanh cùng lúc.
5. **Dọn dẹp (Cleanup):** Sử dụng hàm `observer.unobserve()` khi component bị unmount để tránh rò rỉ bộ nhớ (memory leak).

---

