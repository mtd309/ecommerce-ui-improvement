
# ETS-inspired Search Empty State — HTML/CSS UI Improvement

**Bài tập cá nhân Chương 1 – Phát triển ứng dụng WEB/TMĐT**

## 1. Giới thiệu

Đây là bài tập cải tiến giao diện website thương mại điện tử, tham khảo từ **ETS Official**, một website kinh doanh thời trang trực tuyến.

Em lựa chọn cải tiến khu vực **tìm kiếm khi không có kết quả (Search Empty State)**.

Khi tìm từ khóa không liên quan đến sản phẩm như `laptop`, website ETS Official hiển thị thông báo không tìm thấy kết quả và hướng dẫn người dùng thử tìm kiếm khác.

Thông báo này rõ ràng và đáp ứng chức năng cơ bản. Tuy nhiên, ở trạng thái đã khảo sát, người dùng chưa có liên kết trực tiếp đến danh mục hoặc sản phẩm gợi ý.

Vì vậy, em thiết kế một trang giao diện minh họa bằng HTML5/CSS3, bổ sung liên kết **Explore the Collection** và khu vực **You may also like** với bốn sản phẩm mẫu.

Mục tiêu là giúp người dùng có hướng tiếp tục khám phá sản phẩm khi tìm kiếm không có kết quả, đồng thời giữ phong cách giao diện tối giản, tập trung vào hình ảnh của ETS Official.

## 2. Website tham khảo

- **Tên website:** ETS Official
- **URL:** https://etsofficial.com/
- **Lĩnh vực:** Thời trang và phụ kiện.
- **Khu vực đã khảo sát:** Trang chủ, danh mục sản phẩm, chi tiết sản phẩm, tìm kiếm và giỏ hàng.
- **Khu vực lựa chọn cải tiến:** Giao diện tìm kiếm khi không có kết quả.

**Kết quả khảo sát liên quan đến cải tiến:**

- ETS có chức năng tìm kiếm sản phẩm.
- Khi tìm từ khóa `jacket`, website hiển thị 6 kết quả cùng bộ lọc và sắp xếp.
- Khi tìm từ khóa `laptop`, website hiển thị thông báo không có kết quả.
- Trạng thái không có kết quả đã có thông báo rõ ràng, nhưng trong phần giao diện khảo sát chưa thấy liên kết đến danh mục hoặc sản phẩm gợi ý.

Đây là cơ hội cải thiện trải nghiệm người dùng, không phải lỗi chức năng của website ETS Official.

## 3. Chức năng giao diện

Trang web minh họa có các thành phần sau:

1. **Tiêu đề và thanh điều hướng:** Hiển thị tên giao diện, liên kết đến khu vực sản phẩm và thông tin bản demo.
2. **Truy vấn tìm kiếm mẫu:** Hiển thị từ khóa `laptop` để minh họa tình huống không tìm thấy sản phẩm.
3. **Thông báo không có kết quả:** Giải thích rằng không có sản phẩm phù hợp với từ khóa mẫu.
4. **Liên kết Explore the Collection:** Đưa người dùng xuống khu vực sản phẩm gợi ý trong cùng trang.
5. **Khu vực You may also like:** Hiển thị bốn sản phẩm thời trang mẫu.
6. **Thẻ sản phẩm:** Mỗi sản phẩm có hình ảnh minh họa, tên, giá và mục View Item để mở thông tin ngắn.
7. **Responsive:** Giao diện sử dụng bố cục bốn cột trên màn hình rộng và hai cột trên màn hình điện thoại.

**Bốn sản phẩm mẫu:**

| Sản phẩm | Giá minh họa |
|---|---:|
| Structured Jacket | 1.890.000 VND |
| Asymmetric Top | 790.000 VND |
| Wide-leg Denim | 1.290.000 VND |
| Sculpted Midi Dress | 1.590.000 VND |

**Giới hạn chức năng:** Đây là trang mô phỏng tĩnh bằng HTML/CSS. Từ khóa `laptop` được hiển thị sẵn, không phải dữ liệu được hệ thống tìm kiếm xử lý. Các mục View Item chỉ mở mô tả ngắn, không thực hiện đặt hàng hoặc thanh toán.

## 4. Công nghệ

- **HTML5:** Xây dựng cấu trúc và nội dung trang.
- **CSS3:** Thiết kế bố cục, màu sắc, khoảng cách và giao diện responsive.
- **SVG:** Hiển thị bốn hình minh họa sản phẩm mẫu.

Dự án không sử dụng JavaScript, backend, cơ sở dữ liệu hoặc thư viện giao diện bên ngoài.

**Cấu trúc thư mục:**

```text
ecommerce-ui-improvement/
├── index.html
├── css/
│   └── style.css
├── images/
│   ├── jacket.svg
│   ├── top.svg
│   ├── jeans.svg
│   └── dress.svg
├── README.md
└── AI_USAGE.md
```

## 5. Cách chạy

**Cách 1 – Mở trực tiếp trên trình duyệt**

1. Tải mã nguồn về máy và giải nén nếu cần.
2. Mở thư mục dự án.
3. Nhấp đúp vào file `index.html`.
4. Trang web sẽ hiển thị trên Chrome hoặc trình duyệt tương thích.

**Cách 2 – Mở bằng Visual Studio Code**

1. Mở thư mục dự án bằng VS Code.
2. Mở file `index.html`.
3. Có thể sử dụng tiện ích Live Server nếu đã cài đặt.

**Kiểm tra giao diện:**

- Kiểm tra tiêu đề, thông báo tìm kiếm và bốn sản phẩm mẫu.
- Nhấn Explore the Collection để di chuyển đến khu vực sản phẩm gợi ý.
- Nhấn View Item để mở hoặc thu gọn mô tả sản phẩm.
- Mở Chrome DevTools bằng `F12`, bật chế độ thiết bị di động để kiểm tra responsive.
- Kiểm tra hình ảnh, văn bản, nút thao tác và bố cục trên máy tính và điện thoại.

## 6. Cải tiến đã thực hiện

### 6.1. Vấn đề ban đầu

Qua khảo sát ETS Official, em nhận thấy khi tìm một từ khóa không có kết quả, website hiển thị thông báo và hướng dẫn người dùng thử tìm kiếm lại.

Em lựa chọn cải tiến trạng thái này nhằm bổ sung hướng tiếp tục mua sắm thay vì chỉ dừng ở thông báo không có kết quả.

### 6.2. Phương án thiết kế

Em xây dựng giao diện gồm:

- Thông báo không tìm thấy sản phẩm bằng tiếng Anh.
- Liên kết Explore the Collection.
- Khu vực You may also like.
- Bốn thẻ sản phẩm mẫu với hình ảnh, tên, giá và View Item.

Giao diện sử dụng nền trắng, chữ đen/xám và bố cục tối giản để phù hợp với định hướng thiết kế tham khảo từ ETS Official.

### 6.3. Tự kiểm tra và điều chỉnh CSS

Sau khi chạy thử bản HTML/CSS, em nhận thấy khu vực tìm kiếm có khá nhiều khoảng trắng theo chiều dọc, khiến sản phẩm gợi ý xuất hiện thấp trên trang.

Em đã mở file `css/style.css` và tự điều chỉnh:

- `.search-section`: thay `padding: 75px 20px 92px` thành `padding: 48px 20px 52px`.
- `.empty-state`: thay `padding: 60px 0 10px` thành `padding: 36px 0 10px`.

Sau khi lưu và tải lại trang, phần nội dung tìm kiếm được thu gọn, khu vực sản phẩm gợi ý xuất hiện sớm hơn.

Em đã kiểm tra lại giao diện trên máy tính và điện thoại. Các thành phần vẫn hiển thị rõ ràng, không phát hiện hiện tượng tràn hoặc chồng lấn bố cục trong quá trình kiểm tra.

## 7. Hỗ trợ từ AI

Em sử dụng ChatGPT để hỗ trợ:

- Phân tích giao diện và trải nghiệm người dùng của năm khu vực website.
- Đề xuất phương án cải tiến khu vực tìm kiếm không có kết quả.
- Giải thích bố cục, các thành phần HTML5 và cách tổ chức CSS3.
- Hỗ trợ tạo mã nguồn HTML/CSS ban đầu.
- Giải thích ý nghĩa các thuộc tính CSS để em có thể tự kiểm tra và điều chỉnh.

**Những phần em trực tiếp thực hiện:**

- Mở và khảo sát website ETS Official.
- Kiểm tra danh mục, sản phẩm, tìm kiếm, giỏ hàng và Checkout.
- Đối chiếu kết quả AI với giao diện website thực tế.
- Chạy trang HTML/CSS trên máy tính.
- Kiểm tra bố cục trên điện thoại.
- Tự điều chỉnh khoảng trắng bằng CSS và kiểm tra kết quả.

Chi tiết về cách sử dụng AI được trình bày trong file [AI_USAGE.md](AI_USAGE.md).

## Lưu ý về nguồn sản phẩm

Bốn hình SVG, tên sản phẩm và giá trong bản demo đều là dữ liệu minh họa phục vụ bài tập, không phải hình ảnh sản phẩm và giá bán chính thức của ETS Official.

Đây là sản phẩm học tập độc lập, chỉ tham khảo cách tổ chức giao diện và không liên kết chính thức với ETS Official.
