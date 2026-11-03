# KIỂM THỬ VÀ TỰ ĐIỀU CHỈNH

Bản tổng hợp kiểm thử, các giới hạn minh chứng và phần tự điều chỉnh được trình bày tại [04_BAO_CAO_HOAN_THIEN_BUOI_2.md](04_BAO_CAO_HOAN_THIEN_BUOI_2.md), mục 7.

## Thay đổi CSS đã được ghi nhận trong quá trình làm bài

```css
/* Trước */
.search-section { padding: 75px 20px 92px; }
.empty-state { padding: 60px 0 10px; }

/* Sau */
.search-section { padding: 48px 20px 52px; }
.empty-state { padding: 36px 0 10px; }
```

## Ảnh minh chứng

- Trước hoàn thiện card: [before-product-grid-desktop.png](evidence/before-product-grid-desktop.png)
- Sau hoàn thiện card: [after-product-cards-desktop.png](evidence/after-product-cards-desktop.png)
- Hover: [hover-view-item.png](evidence/hover-view-item.png)
- Mobile: [mobile-full-page.png](evidence/mobile-full-page.png)

**Lưu ý:** Cần chạy lại bản mã nguồn cuối để xác nhận trạng thái các mục trong bảng kiểm thử. Không đánh dấu “Đạt” cho những phép thử chưa thực hiện lại.
