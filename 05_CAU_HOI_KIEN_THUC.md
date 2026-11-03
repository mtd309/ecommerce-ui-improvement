# 7 CÂU HỎI KIỂM TRA KIẾN THỨC – BUỔI 2

## Câu 1. Trong khu vực giao diện của em, em đã sử dụng những phần tử HTML5 nào? Vì sao em chọn chúng?

Em sử dụng `header` cho phần đầu trang, `nav` cho nhóm liên kết điều hướng, `main` cho nội dung chính, `section` để chia khu vực tìm kiếm và sản phẩm gợi ý, `article` cho từng thẻ sản phẩm, cùng các thẻ tiêu đề `h1`, `h2`, `h3` để thể hiện thứ bậc nội dung. Em dùng `img` để hiển thị hình sản phẩm, `a` cho liên kết Explore the Collection và `details`/`summary` để mở phần mô tả View Item. Em chọn các thẻ này vì ý nghĩa của chúng phù hợp với nội dung, giúp HTML dễ đọc và dễ bảo trì hơn.

## Câu 2. Giải thích sự khác nhau giữa margin và padding. Cho ví dụ từ thẻ sản phẩm của em.

`padding` là khoảng cách bên trong phần tử, nằm giữa nội dung và đường viền. `margin` là khoảng cách bên ngoài đường viền, dùng để tách phần tử khỏi các phần tử xung quanh. Trong `.product-card`, padding tạo khoảng trống giữa hình ảnh/thông tin và viền card; khoảng cách giữa các card trong danh sách hiện được quản lý chủ yếu bằng `gap` của `.product-grid`.

## Câu 3. Trong bài của em, Flexbox được sử dụng ở đâu? Giải thích tác dụng của justify-content và align-items.

Flexbox được dùng ở header, navigation, phần tiêu đề khu vực và `.product-info` để sắp xếp các phần tử theo một chiều. `justify-content` căn chỉnh hoặc phân bố phần tử theo trục chính; `align-items` căn chỉnh phần tử theo trục vuông góc với trục chính. Ví dụ, `.product-info` dùng `display: flex` và `justify-content: space-between` để đặt thông tin sản phẩm và số thứ tự ở hai phía.

## Câu 4. CSS Grid khác Flexbox như thế nào? Vì sao em sử dụng Grid cho danh sách sản phẩm?

Flexbox phù hợp để bố trí theo một chiều, theo hàng hoặc cột. Grid phù hợp để bố trí đồng thời theo hàng và cột. Em dùng Grid cho `.product-grid` vì bốn sản phẩm cần nằm thành các cột có kích thước đồng đều; media query thay đổi số cột khi màn hình hẹp.

## Câu 5. Nếu xóa quy tắc CSS display: grid khỏi danh sách sản phẩm, giao diện có thể thay đổi như thế nào?

Các thẻ sản phẩm sẽ không còn được bố trí theo lưới do Grid tạo ra. Vì `article` là phần tử block, chúng có thể xếp nối tiếp theo chiều dọc theo luồng tài liệu, làm danh sách dài hơn và mất bố cục bốn cột/hai cột đã thiết kế.

## Câu 6. Vì sao cần sử dụng thuộc tính alt cho hình ảnh sản phẩm?

`alt` cung cấp nội dung thay thế mô tả hình ảnh khi ảnh không tải được và hỗ trợ người dùng sử dụng trình đọc màn hình hiểu hình ảnh. Trong bài, alt mô tả loại trang phục và đặc điểm chính của từng hình minh họa.

## Câu 7. Hãy nêu một đề xuất của AI mà em đã kiểm tra hoặc điều chỉnh trước khi đưa vào bài tập.

AI hỗ trợ đề xuất điều chỉnh khoảng trắng của khu vực tìm kiếm. Em kiểm tra giao diện trên trình duyệt, sau đó tự thay đổi padding của `.search-section` từ `75px 20px 92px` thành `48px 20px 52px`, đồng thời thay padding-top của `.empty-state` từ `60px` thành `36px`. Sau khi lưu và tải lại trang, em quan sát phần tìm kiếm gọn hơn và khu vực sản phẩm gợi ý xuất hiện gần hơn. Đây là thay đổi CSS em cần có thể chỉ ra và giải thích trực tiếp trong mã nguồn.
