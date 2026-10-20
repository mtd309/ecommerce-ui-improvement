# AI Usage Log

## 1. Công cụ AI
ChatGPT.

## 2. Mục đích sử dụng
Phân tích UI/UX, đề xuất bố cục cải tiến và hỗ trợ tạo mã HTML5/CSS3.

## 3. Prompt đã sử dụng
- Prompt khảo sát giao diện ETS theo mẫu giảng viên (Nhiệm vụ 2): xem nhật ký/ghi chép khảo sát đính kèm khi nộp.
- Prompt thiết kế (Nhiệm vụ 3): đề nghị cải tiến trạng thái tìm kiếm không có kết quả, dùng tiếng Anh, giải thích bố cục, HTML, CSS, responsive và cách kiểm tra trước khi tạo mã.
- Yêu cầu tạo mã: xây dựng trang HTML/CSS có thông báo tìm kiếm không có kết quả và 4 sản phẩm mẫu, CSS tách riêng, chạy trên máy tính và điện thoại.

## 4. Kết quả AI đề xuất
Trang tìm kiếm mẫu, thông báo không có kết quả, liên kết chuyển tới sản phẩm gợi ý; 4 sản phẩm, thẻ mở thông tin với HTML `details`.


## 5. Kiểm tra và điều chỉnh của sinh viên

Sau khi nhận mã HTML/CSS do AI hỗ trợ tạo, em đã tải mã nguồn về máy, mở file `index.html` trên trình duyệt và kiểm tra giao diện thực tế.

**Các nội dung đã kiểm tra:**
- Trên máy tính: kiểm tra tiêu đề, ô tìm kiếm minh họa, thông báo không có kết quả, nút Explore the Collection và bốn thẻ sản phẩm.
- Trên điện thoại: kiểm tra bố cục responsive, cách sắp xếp sản phẩm, hình ảnh, nội dung chữ và khả năng hiển thị của các thành phần.
- Kiểm tra các sản phẩm mẫu có hình ảnh, tên, giá và nút View Item.

**Vấn đề tự phát hiện:**

Phần tìm kiếm và thông báo không có kết quả sử dụng khá nhiều khoảng trắng theo chiều dọc. Điều này làm khu vực gợi ý sản phẩm xuất hiện thấp trên trang và người dùng phải cuộn xuống để xem.

**Điều chỉnh đã thực hiện:**

Em mở file `css/style.css` bằng VS Code và thay đổi thuộc tính `padding`:

- `.search-section`: từ `75px 20px 92px` thành `48px 20px 52px`.
- `.empty-state`: từ `60px 0 10px` thành `36px 0 10px`.

**Kết quả sau điều chỉnh:**

Em lưu file CSS, tải lại trang và kiểm tra. Khoảng cách giữa các thành phần được thu gọn, khu vực You may also like xuất hiện sớm hơn. Tiêu đề, thông báo, nút điều hướng và các thẻ sản phẩm vẫn hiển thị rõ ràng trên máy tính.

Em cũng kiểm tra lại trên điện thoại và không phát hiện lỗi tràn hoặc chồng lấn bố cục.

## 6. Phần em hiểu và có thể giải thích

**HTML5 – Cấu trúc trang web:**

- `<header>`: tạo phần đầu trang và khu vực điều hướng.
- `<main>`: chứa nội dung chính của trang.
- `<section>`: phân chia các khu vực nội dung.
- `<article>`: biểu diễn từng thẻ sản phẩm.
- `<img>`: hiển thị hình ảnh sản phẩm.
- `<a>`: tạo liên kết điều hướng.
- `<details>`: cho phép mở hoặc thu gọn thông tin bổ sung mà không cần JavaScript.

**CSS3 – Thiết kế giao diện:**

- `padding`: tạo khoảng cách bên trong phần tử. Đây là thuộc tính em đã trực tiếp điều chỉnh.
- `display: grid`: sắp xếp các thẻ sản phẩm theo dạng lưới.
- `grid-template-columns`: xác định số cột của lưới sản phẩm.
- `@media`: áp dụng các quy tắc CSS theo kích thước màn hình, giúp giao diện phù hợp với điện thoại.

**Giải thích phần tự chỉnh sửa:**

Em giảm giá trị `padding` của `.search-section` và `.empty-state` để thu gọn khoảng trắng theo chiều dọc. Thay đổi này không làm mất nội dung HTML mà chỉ ảnh hưởng đến khoảng cách trình bày.

**Giới hạn của sản phẩm:**

Trang web là bản minh họa giao diện bằng HTML5/CSS3. Trạng thái tìm kiếm không có kết quả được thiết lập sẵn bằng từ khóa ví dụ `laptop`; website chưa xử lý truy vấn tìm kiếm thực tế vì không sử dụng JavaScript, backend hoặc cơ sở dữ liệu.

Bốn sản phẩm và hình ảnh SVG là dữ liệu minh họa phục vụ bài tập, không phải sản phẩm và giá bán chính thức của ETS Official.

