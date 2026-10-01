# Toy Store UI update

Các file trong gói này là phần UI đã cập nhật cho nhánh Minh.

Thay đổi chính:
- Header hiện đại + sticky + mobile menu.
- Navbar sticky + mega menu.
- Hero banner slider tự động, nút điều hướng, indicator, animation.
- Category cards có hover/gradient.
- Product cards có hover, quick-view visual, wishlist, rating, add-to-cart.
- Flash sale/Product section được làm lại.
- Promo banner có showcase sản phẩm.
- Best seller có rank.
- Service section ở trang chủ được làm lại.
- Footer hiện đại hơn.
- globals.css thêm animation và style dùng chung.

Cách cập nhật:
1. Giải nén gói này vào thư mục project:
   C:\xampp82\htdocs\toy-store-client
2. Chọn Replace/ghi đè các file.
3. Mở PowerShell tại project.
4. Chạy:
   npm run dev
5. Mở:
   http://localhost:3000

Lưu ý: Không cần xóa app/api, cart, checkout, context hoặc các logic hiện có.
Gói này chỉ chứa các file UI cần thay đổi.
