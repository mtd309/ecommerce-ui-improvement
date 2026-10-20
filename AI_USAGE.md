
# AI Usage Log

**Dự án:** ETS-inspired Search Empty State – HTML/CSS UI Improvement  
**Học phần:** Phát triển ứng dụng WEB/TMĐT – Chương 1  
**Website tham khảo:** https://etsofficial.com/

## 1. Công cụ AI

**Công cụ sử dụng:** ChatGPT.

Em sử dụng ChatGPT để hỗ trợ phân tích giao diện, đề xuất cải tiến trải nghiệm người dùng, giải thích HTML/CSS và hỗ trợ xây dựng trang giao diện minh họa.

AI đóng vai trò công cụ hỗ trợ. Em trực tiếp khảo sát website, đối chiếu kết quả, chạy thử giao diện và thực hiện chỉnh sửa CSS.

## 2. Mục đích sử dụng

Em sử dụng AI cho ba công việc chính:

**Nhiệm vụ 2 – Phân tích website:**
- Phân tích năm khu vực của ETS Official.
- Nhận diện chức năng, điểm thuận tiện và những vấn đề UX có thể phát sinh.
- Đề xuất các phương án cải tiến để đối chiếu với website thực tế.

**Nhiệm vụ 3 – Đề xuất thiết kế:**
- Phân tích vấn đề tìm kiếm không có kết quả.
- Đề xuất bố cục giao diện cải tiến.
- Giải thích các thành phần HTML, CSS và phương án responsive trước khi tạo mã.

**Nhiệm vụ 3 – Hỗ trợ tạo mã:**
- Hỗ trợ xây dựng một trang HTML5/CSS3 có thể chạy trên trình duyệt.
- Tạo giao diện tiếng Anh với thông báo không có kết quả và bốn sản phẩm mẫu.
- Giải thích cách chạy, kiểm tra và điều chỉnh giao diện.

## 3. Prompt đã sử dụng

Các nội dung dưới đây tổng hợp những yêu cầu chính đã sử dụng trong quá trình làm bài, trình bày lại theo cấu trúc prompt của giảng viên. Đây không phải bản sao nguyên văn từng tin nhắn trong cuộc trò chuyện.

### Prompt 1 – Phân tích website (Nhiệm vụ 2)

> Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng cho website thương mại điện tử.
>
> Tôi đang khảo sát website: ETS Official – https://etsofficial.com/.
>
> Hãy giúp tôi lập bảng phân tích các khu vực:
>
> 1. Trang chủ.
> 2. Danh mục sản phẩm.
> 3. Chi tiết sản phẩm.
> 4. Tìm kiếm.
> 5. Giỏ hàng.
>
> Với mỗi khu vực, hãy nêu:
> - Mục đích của chức năng.
> - Thành phần giao diện cần có.
> - Điểm thuận tiện đối với khách hàng.
> - Một vấn đề có thể phát sinh.
> - Một đề xuất cải tiến.
>
> Không khẳng định những tính năng chưa được kiểm chứng.
>
> Phân biệt rõ nhận xét dựa trên quan sát và đề xuất của AI.

**Kết quả:** AI đề xuất phân tích chức năng, ưu điểm, rủi ro UX và các hướng cải tiến cho năm khu vực ETS Official.

### Prompt 2 – Đề xuất phương án thiết kế (Nhiệm vụ 3)

> Em đang thực hiện bài tập phát triển giao diện website thương mại điện tử bằng HTML5 và CSS3.
>
> Em muốn cải tiến khu vực: trạng thái tìm kiếm không có kết quả (Search Empty State) của website ETS Official.
>
> Qua khảo sát, khi tìm từ khóa `laptop`, website có thông báo không tìm thấy sản phẩm nhưng chưa hiển thị liên kết trực tiếp đến danh mục hoặc sản phẩm gợi ý trong trạng thái này.
>
> Đối tượng sử dụng: khách hàng mua sắm trực tuyến tại Việt Nam.
>
> Em muốn giao diện sử dụng tiếng Anh để phù hợp với phong cách website ETS Official.
>
> Hãy đề xuất:
>
> 1. Bố cục giao diện.
> 2. Các thành phần HTML cần sử dụng.
> 3. Cách tổ chức CSS.
> 4. Cách hiển thị trên máy tính và điện thoại.
> 5. Những điểm cần kiểm tra về khả năng sử dụng.
>
> Trước tiên, hãy giải thích phương án thiết kế.
>
> Chưa tạo toàn bộ mã nguồn cho đến khi em yêu cầu.

**Kết quả:** AI đề xuất bố cục gồm thông báo không có kết quả, liên kết tiếp tục khám phá và khu vực sản phẩm gợi ý; đồng thời giải thích vai trò các thành phần HTML/CSS và cách tổ chức responsive.

### Prompt 3 – Hỗ trợ tạo mã nguồn (Nhiệm vụ 3)

> Dựa trên phương án đã lựa chọn, hãy tạo một trang giao diện thương mại điện tử bằng HTML5 và CSS3.
>
> Website tham khảo: ETS Official – https://etsofficial.com/.
>
> Yêu cầu:
>
> - Giao diện sử dụng tiếng Anh.
> - Có tiêu đề và khu vực tìm kiếm minh họa.
> - Có thông báo không tìm thấy kết quả.
> - Có liên kết dẫn đến khu vực sản phẩm gợi ý.
> - Có tối thiểu bốn sản phẩm mẫu.
> - Mỗi sản phẩm có hình ảnh, tên, giá và nút thao tác.
> - Bố cục phù hợp với máy tính và điện thoại.
> - HTML có cấu trúc rõ ràng.
> - CSS được tách thành file riêng.
> - Không sử dụng JavaScript, backend hoặc cơ sở dữ liệu.
> - Không đưa thư viện hoặc thành phần không cần thiết vào dự án.
>
> Giải thích cách chạy trang web và những nội dung em cần kiểm tra.

**Kết quả:** AI hỗ trợ tạo bộ mã nguồn HTML5/CSS3, hình minh họa SVG và bố cục sản phẩm responsive.

## 4. Kết quả AI đề xuất

### 4.1. Phân tích giao diện ETS Official

AI đưa ra các nhận xét về năm khu vực và đề xuất một số hướng cải tiến.

Sau khi đối chiếu với website thực tế, em nhận thấy một số nhận xét cần điều chỉnh:

- **Trang chủ:** ETS đã có thanh điều hướng, liên kết mua sắm và dãy Best seller cuộn ngang; em không xác nhận nhận định điều hướng khó sử dụng.
- **Danh mục:** ETS đã có bộ lọc, sắp xếp và nhãn SOLD OUT; vì vậy không cần đề xuất bổ sung các thành phần đã tồn tại.
- **Chi tiết sản phẩm:** ETS đã cung cấp bảng Size & Fit có số đo; vì vậy đề xuất thêm bảng kích thước là không phù hợp.
- **Tìm kiếm:** Em đã kiểm tra từ khóa `jacket` cho sáu kết quả và `laptop` không có kết quả. ETS có thông báo không tìm thấy sản phẩm.
- **Giỏ hàng:** Em đã xác nhận giỏ hàng có thông tin sản phẩm, số lượng, nút tăng/giảm, xóa, tổng tiền ước tính và trang Checkout.

Từ kết quả khảo sát, em lựa chọn cải tiến trạng thái tìm kiếm không có kết quả.

### 4.2. Phương án giao diện AI đề xuất

Bản thiết kế gồm:

- Thanh tiêu đề và điều hướng.
- Từ khóa tìm kiếm mẫu `laptop`.
- Thông báo No Match Found.
- Liên kết Explore the Collection.
- Khu vực You may also like với bốn sản phẩm.
- Giao diện responsive cho máy tính và điện thoại.

### 4.3. Kết quả tạo mã

AI hỗ trợ tạo:

- `index.html`: nội dung và cấu trúc trang.
- `css/style.css`: bố cục, màu sắc, khoảng cách và responsive.
- `images/`: bốn hình SVG minh họa sản phẩm.

Trang được xây dựng bằng HTML/CSS, không có chức năng tìm kiếm dữ liệu thực tế.

## 5. Kiểm tra và điều chỉnh của sinh viên

### 5.1. Chạy thử website

Sau khi nhận mã nguồn, em tải và giải nén dự án trên máy tính, mở `index.html` bằng trình duyệt.

Em kiểm tra các thành phần:

- Tiêu đề trang và thanh điều hướng.
- Ô tìm kiếm minh họa và thông báo không có kết quả.
- Liên kết Explore the Collection.
- Bốn thẻ sản phẩm với hình ảnh, tên, giá và mục View Item.
- Bố cục trang khi hiển thị trên máy tính và điện thoại.

### 5.2. Vấn đề em tự phát hiện

Khi xem giao diện ban đầu, em nhận thấy phần tìm kiếm và thông báo không có kết quả có khá nhiều khoảng trắng theo chiều dọc.

Điều này khiến người dùng phải cuộn xuống nhiều hơn để xem khu vực You may also like.

### 5.3. Điều chỉnh mã CSS

Em mở file `css/style.css` trong VS Code và sửa thuộc tính `padding` của hai nhóm CSS.

**Trước khi chỉnh sửa:**

```css
.search-section {
  padding: 75px 20px 92px;
}

.empty-state {
  padding: 60px 0 10px;
}
```

**Sau khi chỉnh sửa:**

```css
.search-section {
  padding: 48px 20px 52px;
}

.empty-state {
  padding: 36px 0 10px;
}
```

Thay đổi này làm giảm khoảng cách bên trong hai khu vực, giúp nội dung gọn hơn mà không thay đổi cấu trúc HTML.

### 5.4. Kết quả sau điều chỉnh

Em đã lưu file CSS và tải lại trang trên trình duyệt.

Kết quả:

- Phần tìm kiếm được thu gọn theo chiều dọc.
- Khu vực You may also like xuất hiện sớm hơn khi cuộn trang.
- Thông báo, nút điều hướng và hình ảnh sản phẩm vẫn rõ ràng.
- Em đã kiểm tra lại giao diện trên điện thoại và không phát hiện lỗi tràn hoặc chồng lấn bố cục.

Em giữ nguyên những thành phần đã hoạt động phù hợp và không bổ sung JavaScript, backend hoặc chức năng không thuộc yêu cầu bài tập.

## 6. Phần em hiểu và có thể giải thích

### 6.1. Vai trò của HTML5

- `<header>`: chứa phần đầu trang và thanh điều hướng.
- `<nav>`: nhóm các liên kết điều hướng.
- `<main>`: chứa nội dung chính.
- `<section>`: chia trang thành các khu vực chức năng.
- `<h1>`, `<h2>`, `<h3>`: thể hiện các cấp tiêu đề.
- `<article>`: đại diện cho từng thẻ sản phẩm.
- `<img>`: hiển thị hình ảnh sản phẩm.
- `<a>`: tạo liên kết, chẳng hạn chuyển đến khu vực sản phẩm gợi ý.
- `<details>` và `<summary>`: cho phép mở hoặc thu gọn mô tả sản phẩm mà không cần JavaScript.

### 6.2. Vai trò của CSS3

- `padding`: tạo khoảng cách bên trong phần tử HTML.
- `margin`: tạo khoảng cách bên ngoài phần tử.
- `display: grid`: bố trí các thẻ sản phẩm theo dạng lưới.
- `grid-template-columns`: quy định cách chia cột trong lưới.
- `@media`: thay đổi quy tắc hiển thị theo kích thước màn hình.
- `font-size`: thay đổi kích thước chữ.
- `color` và `background`: định dạng màu chữ và nền.

### 6.3. Giải thích phần em tự sửa

Em đã chỉnh thuộc tính `padding` của `.search-section` và `.empty-state`.

Ví dụ:

```css
padding: 48px 20px 52px;
```

Ba giá trị lần lượt quy định:

- `48px`: khoảng cách phía trên.
- `20px`: khoảng cách bên trái và phải.
- `52px`: khoảng cách phía dưới.

Việc giảm các giá trị này giúp thu gọn khoảng trắng của khu vực tìm kiếm mà không xóa hoặc thay đổi nội dung trang.

### 6.4. Giải thích về responsive

CSS sử dụng bố cục dạng lưới để sắp xếp các thẻ sản phẩm.

Trên màn hình rộng, các thẻ được trình bày thành bốn cột. Khi màn hình nhỏ hơn, quy tắc `@media` giúp bố cục chuyển thành hai cột để phù hợp với điện thoại.

Nhờ vậy, sản phẩm không cần giữ nguyên kích thước như trên máy tính và người dùng có thể xem nội dung thuận tiện hơn.

### 6.5. Giới hạn kỹ thuật

Em hiểu rằng HTML chủ yếu xác định nội dung, còn CSS chủ yếu đảm nhiệm phần trình bày giao diện.

Vì dự án không dùng JavaScript hoặc backend:

- Từ khóa `laptop` chỉ là nội dung minh họa được hiển thị sẵn.
- Thông báo không có kết quả không được tạo từ một hệ thống tìm kiếm thực tế.
- Explore the Collection là liên kết di chuyển đến khu vực sản phẩm trong cùng trang.
- View Item mở phần mô tả bằng HTML `<details>`, không phải chức năng mua hàng.

Đây là bản cải tiến giao diện phục vụ học tập, không phải một website thương mại điện tử đầy đủ.
