# NHIỆM VỤ 3 — KIỂM THỬ VÀ TỰ ĐIỀU CHỈNH HTML/CSS

## 1. Vấn đề được chọn

Ở trạng thái tìm kiếm `laptop` không có kết quả trên ETS, thông báo đã rõ ràng nhưng người dùng chưa thấy đường dẫn trực tiếp đến danh mục hay sản phẩm gợi ý trong phần khảo sát. Em xây dựng bản minh họa thêm **Explore the Collection** và **You may also like** gồm bốn sản phẩm có hình, tên, giá và View Item.

## 2. Phạm vi và sản phẩm

- Mã HTML5: [`../index.html`](../index.html)
- CSS3 độc lập: [`../css/style.css`](../css/style.css)
- Bốn hình minh họa SVG: [`../images/`](../images/)
- Responsive: bốn cột ở màn hình rộng, hai cột trên điện thoại.
- Đây là giao diện tĩnh: tìm kiếm không xử lý dữ liệu thật, View Item chỉ mở thông tin ngắn; không có JavaScript/backend/thanh toán.

## 3. Bảng kiểm thử thực tế

| Trường hợp | Cách kiểm tra | Kết quả đã ghi nhận |
|---|---|---|
| Mở giao diện máy tính | Mở `index.html` bằng trình duyệt trên máy tính | Trang chạy và hiển thị giao diện; có thể so sánh trước/sau chỉnh sửa. |
| Nội dung tìm kiếm | Xem từ khóa minh họa, thông báo và liên kết khám phá | Các thành phần có trong bản demo. |
| Sản phẩm mẫu | Kiểm tra bốn sản phẩm và các hình SVG | Bản demo đã hiển thị trong ảnh chạy thử. |
| Bố cục điện thoại | Kiểm tra phiên bản mobile | Em đã kiểm tra và báo giao diện ổn, không phát hiện chồng lấn. |
| Chỉnh sửa cá nhân | Giảm khoảng cách dọc trong `style.css`, tải lại trang | Khoảng trắng giảm; phần gợi ý sản phẩm được đưa lên gần hơn. |

## 4. Chỉnh sửa mã CSS do em thực hiện

| Bộ chọn CSS | Trước | Sau | Mục đích |
|---|---|---|---|
| `.search-section` | `padding:75px 20px 92px` | `padding:48px 20px 52px` | Giảm khoảng cách trên/dưới khu vực tìm kiếm. |
| `.empty-state` | `padding:60px 0 10px` | `padding:36px 0 10px` | Đưa nội dung trạng thái rỗng và phần gợi ý đến gần nhau hơn. |

Từ đây em hiểu `padding` là khoảng cách bên trong phần tử. Ba giá trị lần lượt chỉ phía trên, hai bên trái/phải, và phía dưới. Thay đổi `padding` không đổi nội dung HTML mà đổi khoảng trống hiển thị. `display:grid` và `grid-template-columns` tổ chức lưới sản phẩm; `@media` thay đổi cách hiển thị theo độ rộng màn hình.

## 5. Đánh giá cá nhân

Em giữ nguyên phần chức năng và các thành phần mà bản demo đã đáp ứng, chỉ sửa vấn đề khoảng trắng do bản thân phát hiện. Kết quả minh họa một cải tiến nhỏ và có thể giải thích bằng HTML/CSS ở mức bài tập Chương 1.
