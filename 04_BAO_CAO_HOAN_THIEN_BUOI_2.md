# BÁO CÁO HOÀN THIỆN BÀI TẬP CÁ NHÂN BUỔI 2

**Học phần:** Phát triển ứng dụng WEB/TMĐT  
**Chủ đề:** HTML5 và CSS3  
**Dự án:** ETS-inspired Search Empty State UI Improvement

## 1. Phạm vi thực hiện

Bài tập kế thừa website tĩnh đã xây dựng từ Buổi 1. Khu vực tập trung là trạng thái tìm kiếm không có kết quả và phần sản phẩm gợi ý. Không xây dựng website mới hoặc mở rộng sang chức năng backend/JavaScript.

## 2. Rà soát và vấn đề cần cải thiện

Từ bộ ảnh các trạng thái giao diện do sinh viên cung cấp và mã nguồn dự án, có thể xác định các điểm cần hoàn thiện trong chính giao diện bài tập:

| Vấn đề trong bản giao diện trước khi hoàn thiện | Hướng xử lý | Kết quả mong muốn |
|---|---|---|
| Các sản phẩm chủ yếu được phân tách bằng khoảng cách; ranh giới từng card chưa nổi bật | Bổ sung border, border-radius, padding và nền card nhẹ | Người xem nhận diện từng sản phẩm rõ hơn |
| Khu vực thông tin sản phẩm chưa có hàng thao tác thống nhất ở từng card | Dùng `<details>` và `<summary>` để tạo mục View Item mở/đóng mô tả | Mỗi sản phẩm có điểm tương tác trực quan, không cần JavaScript |
| Cần thể hiện rõ bố cục trên màn hình nhỏ | Dùng CSS Grid kết hợp media query | Danh sách chuyển sang hai cột trên màn hình hẹp |

Lưu ý: Đây là các điểm cải thiện của bản giao diện bài tập, không được diễn giải thành lỗi chức năng đã xác minh của website ETS Official. Qua khảo sát được ghi trong hồ sơ, tình huống `laptop` được dùng để minh họa trạng thái không có kết quả; đề xuất thêm đường tiếp tục khám phá là phương án thiết kế của bài tập.

## 3. Cấu trúc HTML5

Mã nguồn sử dụng:

- `<header>` cho phần đầu trang và thương hiệu.
- `<nav>` cho các liên kết điều hướng.
- `<main>` cho nội dung chính.
- `<section>` để chia khu vực tìm kiếm và sản phẩm gợi ý.
- `<article>` cho từng thẻ sản phẩm độc lập.
- `<h1>`, `<h2>`, `<h3>` để tổ chức cấp tiêu đề.
- `<img>` có `alt` mô tả hình minh họa.
- `<a>` cho liên kết cuộn đến phần sản phẩm.
- `<details>` và `<summary>` để mở/thu gọn mô tả mẫu.

Các phần tử được chọn theo chức năng nội dung; không cần ép tất cả trang phải có mọi phần tử HTML5.

## 4. CSS bên ngoài, Selector và Box Model

CSS được tách tại `css/style.css` và liên kết trong phần `<head>` của `index.html`.

Các selector đang dùng gồm element selector (`body`, `a`), class selector (`.product-card`, `.product-info`) và descendant selector (`.product-card summary`). Quy tắc `* { box-sizing: border-box; }` giúp kích thước khai báo bao gồm nội dung, padding và border.

Thẻ sản phẩm sử dụng Box Model:

- `margin`: khoảng cách bên ngoài card so với phần tử xung quanh; trong bố cục hiện tại, khoảng cách giữa card chủ yếu do `gap` của Grid quản lý.
- `padding`: khoảng trống giữa nội dung card và đường viền.
- `border`: đường viền phân tách card.
- `border-radius`: bo góc đường viền.

## 5. Flexbox và CSS Grid

**Flexbox** được áp dụng cho các bố cục một chiều, ví dụ header, navigation, section heading và `.product-info`. `justify-content` phân bố phần tử theo trục chính; `align-items` căn chỉnh theo trục còn lại; `gap` tạo khoảng cách giữa các phần tử con.

**CSS Grid** được áp dụng cho `.product-grid` vì danh sách sản phẩm cần bố trí theo hàng và cột. Quy tắc `grid-template-columns: repeat(4, minmax(0, 1fr))` tạo bốn cột có độ rộng linh hoạt. Ở breakpoint nhỏ hơn, media query đổi thành hai cột. `gap` điều chỉnh khoảng cách giữa các card.

## 6. Hover, Focus và Transition

- `.product-card:hover` thay đổi nhẹ đường viền và bóng đổ khi rê chuột.
- `.primary-link:hover` thay đổi màu nền của liên kết chính.
- `:focus-visible` tạo outline để người dùng bàn phím nhận biết phần tử đang được focus.
- `transition` giúp thay đổi trạng thái diễn ra mượt hơn.

Hover được kích hoạt khi con trỏ trỏ vào phần tử; focus-visible phục vụ trạng thái focus, đặc biệt hữu ích khi điều hướng bằng bàn phím. Hai trạng thái không thay thế cho nhau.

## 7. Kiểm thử và tự điều chỉnh

### 7.1. Những nội dung đã có minh chứng hình ảnh

| Hạng mục | Minh chứng | Nhận xét |
|---|---|---|
| Trạng thái khu vực sản phẩm trước hoàn thiện card | `evidence/before-product-grid-desktop.png` | Thẻ sản phẩm chưa có khung card và hàng View Item như trạng thái sau |
| Card sản phẩm sau hoàn thiện | `evidence/after-product-cards-desktop.png` | Thấy viền card, padding, thông tin và View Item |
| Hover | `evidence/hover-view-item.png` | Một nút View Item đang ở trạng thái nền đen khi rê chuột; đây là ảnh trạng thái hover, không phải bằng chứng focus |
| Mobile – lưới sản phẩm | `evidence/mobile-product-grid.png` | Bốn sản phẩm hiển thị theo hai cột |
| Mobile – toàn trang | `evidence/mobile-full-page.png` | Thấy khu vực tìm kiếm, empty state và phần gợi ý |

### 7.2. Bảng kiểm thử cần xác nhận khi chạy lại bản ZIP cuối

| Nội dung kiểm tra | Cách kiểm tra | Trạng thái hồ sơ |
|---|---|---|
| Trang HTML mở được | Mở `index.html` | Cần chạy lại trên bản ZIP cuối trước khi nộp |
| CSS được áp dụng | Kiểm tra font, màu, card và bố cục | Cần chạy lại trên bản ZIP cuối |
| Hình ảnh hiển thị | Kiểm tra đủ bốn SVG | Cần chạy lại trên bản ZIP cuối |
| Liên kết Explore the Collection | Nhấn liên kết, kiểm tra cuộn đến sản phẩm | Cần chạy lại trên bản ZIP cuối |
| View Item | Mở/đóng từng `<details>` | Cần chạy lại trên bản ZIP cuối |
| Responsive | Kiểm tra viewport desktop và mobile | Có ảnh mobile; nên xác nhận lại trên bản cuối |
| Hover/focus | Thử chuột và phím Tab | Có ảnh hover; focus cần kiểm tra trực tiếp bằng bàn phím |
| Console | Mở DevTools > Console | Chưa có ảnh Console chứng minh không lỗi |

Không ghi tất cả các mục là “Đạt” chỉ dựa vào ảnh. Sinh viên cần chạy lại bản ZIP cuối và cập nhật trạng thái kiểm thử thực tế trước khi nộp.

### 7.3. Điều chỉnh CSS được ghi nhận trong hồ sơ trước đó

Tài liệu kiểm thử hiện có ghi lại thay đổi khoảng cách dọc:

```css
/* Trước */
.search-section { padding: 75px 20px 92px; }
.empty-state { padding: 60px 0 10px; }

/* Sau */
.search-section { padding: 48px 20px 52px; }
.empty-state { padding: 36px 0 10px; }
```

Mục đích là giảm khoảng trắng dọc, đưa khu vực gợi ý đến gần nội dung tìm kiếm hơn. Khi trình bày, cần phân biệt thay đổi này với phần hoàn thiện card sản phẩm; không gộp chúng thành một thay đổi duy nhất.

## 8. Kết luận

Dự án đã thể hiện các kỹ thuật HTML5 semantic, CSS bên ngoài, selector, Box Model, Flexbox, Grid, responsive, hover và focus-visible. Bản demo vẫn giữ phạm vi giao diện tĩnh. Trước khi nộp, sinh viên cần chạy lại đúng bản mã nguồn cuối, xác nhận các mục trong bảng kiểm thử và chụp bổ sung ảnh DevTools/Focus nếu muốn có bằng chứng trực tiếp hơn.
