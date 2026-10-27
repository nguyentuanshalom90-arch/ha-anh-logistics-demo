# Project Notes

- Website demo cho doanh nghiệp vận tải và cảng biển tại Hải Phòng.
- Stack: Next.js App Router, Prisma, PostgreSQL.
- Kiến trúc demo hiện tại: `/` là màn hình chọn nhánh; `/van-tai` và `/cang` là hai landing page độc lập, chưa tách trang nội bộ.
- Nhận diện: Hà Anh Traco dùng xanh lá/vàng; Hoàng Anh dùng xanh dương.
- Nội dung nền lấy từ website hiện tại `https://haanhtraco.com/` và cần được khách xác nhận trước khi dùng production.
- Không deploy production từ demo này nếu chưa xác minh domain, brand, môi trường, database và media persistent.
