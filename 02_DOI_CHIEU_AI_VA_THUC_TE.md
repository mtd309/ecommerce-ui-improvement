# NHIỆM VỤ 2 — SỬ DỤNG AI PHÂN TÍCH VÀ ĐỐI CHIẾU WEBSITE

**Công cụ AI:** ChatGPT  
**Website được phân tích:** ETS Official — https://etsofficial.com/

## 1. Mục đích và cách thực hiện

Em sử dụng AI để gợi ý chức năng, thành phần giao diện, điểm thuận tiện, vấn đề có thể phát sinh và giải pháp cải thiện cho năm khu vực. Sau đó em trực tiếp mở ETS, kiểm tra từng tính năng và sửa/loại bỏ nhận định không đủ bằng chứng. Nhận xét của AI là **giả thuyết cần kiểm chứng**, không phải mặc nhiên là tính năng thực tế.

## 2. Prompt phân tích chính

Đề bài giảng viên sử dụng mẫu sau (điền website đã chọn):

> Bạn là chuyên gia phân tích nghiệp vụ và thiết kế trải nghiệm người dùng cho website thương mại điện tử. Tôi đang khảo sát website: ETS Official — https://etsofficial.com/. Hãy giúp tôi lập bảng phân tích: (1) Trang chủ; (2) Danh mục sản phẩm; (3) Chi tiết sản phẩm; (4) Tìm kiếm; (5) Giỏ hàng. Với mỗi khu vực, nêu mục đích chức năng, thành phần giao diện cần có, điểm thuận tiện, một vấn đề có thể phát sinh và một đề xuất cải tiến. Không khẳng định tính năng chưa được kiểm chứng; phân biệt quan sát và gợi ý AI.

*Ghi chú: đây là prompt chính được trình bày lại theo mẫu của giảng viên; không khẳng định sao chép nguyên văn lịch sử chat.*

## 3. Bảng kết quả AI và kiểm chứng (sản phẩm Nhiệm vụ 2)

| Khu vực | Định hướng AI hỗ trợ phân tích (giả thuyết/khuyến nghị) | Kiểm tra thực tế | Phán quyết và bổ sung của em |
|---|---|---|---|
| **Trang chủ** | Xem banner và lối vào danh mục có đủ rõ; cân nhắc nhấn mạnh CTA. | Banner thời trang, Shop now, điều hướng danh mục và dãy Best seller cuộn ngang; tên/giá đọc rõ. | **Giữ** nhận xét về chức năng và cơ hội nổi bật CTA, nhưng **không khẳng định** tên giá khó đọc hoặc carousel khó sử dụng. |
| **Danh mục** | Đánh giá phân loại, lọc, sắp xếp, xem ảnh và trạng thái hàng. | Đã có Availability, Price, 9 chế độ Sort, SOLD OUT; desktop xem thêm ảnh bằng hover/mũi tên; mobile mở chi tiết để xem. | **Loại bỏ** các gợi ý thêm bộ lọc/sắp xếp như thể chưa tồn tại. **Bổ sung** cơ hội xem nhiều ảnh dễ hơn trên điện thoại. |
| **Chi tiết** | Khuyến nghị tăng hỗ trợ chọn đúng kích cỡ trước khi đặt mua. | Có bảng Size & Fit gồm số đo thật, cùng Product Details và Care & Maintenance. | **Bác bỏ** ý tưởng “thiếu bảng size”. **Điều chỉnh** đề xuất thành lối tắt tới bảng size đã có, đặt gần lựa chọn S/M/L. |
| **Tìm kiếm** | Xem kết quả có ích không và người dùng đi tiếp thế nào khi không tìm thấy. | `jacket` cho 6 kết quả, có lọc/sắp xếp; `laptop` cho thông báo không có kết quả và Clear. | **Giữ** đề xuất UX về đường dẫn khám phá bộ sưu tập, **không kết luận** công cụ tìm kiếm bị lỗi. Chọn khu vực này làm bản HTML/CSS. |
| **Giỏ hàng** | Kiểm tra số lượng, tổng tiền và độ rõ của thông tin chi phí. | Ngăn kéo giỏ có số lượng, +/- và xóa, Discount, Estimated total. Checkout tính 40.000 VND giao hàng + 336.000 VND thuế ước tính trên mẫu đơn 3.360.000 VND. | **Loại bỏ** nhận định giỏ không có điều chỉnh số lượng hoặc không có thông báo phí. **Đề xuất** tăng độ nổi bật của ghi chú tổng ước tính, không giả định thuế/phí luôn cố định. |

## 4. Kết luận sau khi đối chiếu

AI giúp em đặt câu hỏi kiểm tra và phát hiện cơ hội cải tiến, nhưng không thể thay thế thao tác sử dụng website. Em ưu tiên dữ liệu trực tiếp quan sát được; các phần chưa kiểm tra thì không xem là bằng chứng. Phương án được chọn: thiết kế lại trải nghiệm **Search Empty State**, bổ sung liên kết khám phá và bốn sản phẩm minh họa.

## 5. Lưu trữ quá trình sử dụng AI

- Nhật ký công cụ, mục đích, prompt, kết quả, tự kiểm thử và hiểu mã nguồn: [`../AI_USAGE.md`](../AI_USAGE.md).
- Bảng khảo sát dựa trên thực tế: [`01_KHAO_SAT_WEBSITE.md`](01_KHAO_SAT_WEBSITE.md).
- Trang minh họa: [`../index.html`](../index.html).

