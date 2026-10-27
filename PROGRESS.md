# Progress

## Mục tiêu

Dựng demo website mới cho doanh nghiệp vận tải và cảng biển Hải Phòng, với một domain chung và hai nhánh thương hiệu.

## Đã hoàn thành

- Đã đọc brief hình ảnh và website cũ của khách.
- Đã khởi tạo Next.js App Router, Prisma schema PostgreSQL và API `/api/inquiries`.
- Đã tạo gateway `/` để chọn giữa Vận tải Hà Anh và Cảng Hoàng Anh.
- Đã tạo hai landing page riêng `/van-tai` và `/cang`, nội dung phong phú dựa trên dịch vụ hiện có: container, hàng rời, đường bộ/đường thủy, cảng, kho bãi 30ha, bốc xếp, kiểm đếm, cân hàng, hải quan và sửa chữa.
- Đã sao chép logo tham chiếu vào `public/logo/`.
- Đã bổ sung font Be Vietnam Pro có hỗ trợ tiếng Việt đầy đủ, kết hợp Manrope/DM Mono cho phần hiển thị phù hợp.
- Đã build production thành công bằng Next.js sau khi generate Prisma Client.
- Đã audit screenshot mobile cho gateway, landing Vận tải và landing Cảng; không thấy lỗi hiển thị dấu tiếng Việt hoặc vỡ layout ở viewport đã kiểm tra.
- Đã cập nhật gateway để đặt hai logo thật vào khối trắng vuông bo góc 7px, viền kim loại nhiều lớp và đổ bóng 3D theo yêu cầu.
- Đã đưa tên pháp lý, địa chỉ, điện thoại và email công ty vào header gateway; đã bỏ nhãn “NHÁNH 01/02” khỏi hai card.
- Đã loại bỏ biểu tượng “HA” dạng ô vuông khỏi header trang gateway theo yêu cầu.
- Đã nghiên cứu hình ảnh cảng Hải Phòng và tạo asset nền `public/images/hai-phong-port-hero.png`; gateway dùng ảnh này với lớp phủ trắng bán trong suốt để giữ độ đọc.
- Đã tối ưu gateway ở desktop viewport thấp (khoảng 1366×768): thu gọn header/hero, giảm chiều cao card và khoảng cách để hai lựa chọn xuất hiện trọn vẹn ngay màn hình đầu tiên.
- Đã thu nhỏ cụm headline gateway ở desktop để hai khối logo/nhánh giữ trọng tâm thị giác.
- Đã thay bằng hai logo 3D transparent shadow thật trong `public/logo/`, đảo bố cục desktop theo yêu cầu: Hoàng Anh trái-text phải, Hà Anh Traco text trái-logo phải.
- Đã xử lý typography card: phân cấp kicker/title/body/CTA, tăng line-height tiếng Việt và bỏ chồng chữ; hai khối màu được bo góc 10px.
- Đã loại bỏ toàn bộ vòng tròn trang trí nền trên hai card Green/Blue, giữ frame màu đơn sắc để tăng độ rõ của text và logo.
- Đã bỏ số thứ tự lớn 01/02 khỏi card, căn trái toàn bộ text gateway và tăng gap logo-text trên mobile để hai frame ngang thoáng hơn.
- Đã căn trái kicker “CỬA NGÕ BIỂN PHÍA BẮC”; mobile card dùng layout ngang gọn, title giới hạn tối đa 2 dòng và tăng khoảng cách logo-text.
- Đã cập nhật mobile theo layout mới: thu nhỏ khoảng trống đầu trang, hai card vuông đặt cạnh nhau, logo ở phía trên và text căn trái bên dưới.
- Đã căn trái cả dòng điện thoại/email mobile trong header, đồng trục với tên công ty và địa chỉ.
- Đã chuyển mobile lại thành hai card ngang xếp dọc như desktop và đổi toàn bộ heading “Chọn hành trình của bạn.” sang màu đen/navy.
- Đã mở rộng `/van-tai` và `/cang` thành landing page giàu nội dung: hero ảnh Gen, dịch vụ, năng lực thực tế, tin tức/góc nhìn, báo chí, đối tác, liên hệ.
- Đã dùng ảnh Gen tại `public/images/ha-anh-transport-hero.png`, `public/images/hoang-anh-port-hero.png`, `public/images/logistics-yard.png` và lấy 8 logo đối tác từ carousel website gốc vào `public/partners/`.
- Đã thêm menu đầy đủ ở header landing page, form liên hệ trong frame trắng bo góc 10px, nút lên đầu trang và giữ nguyên màu gốc của logo đối tác.

## Chưa làm

- Chưa nối PostgreSQL thực tế vì chưa có `DATABASE_URL` production/staging.
- Chưa thay các minh họa CSS bằng ảnh chụp thật của xe, cảng, kho bãi.
- Chưa xác nhận pháp lý/tên chính thức của thương hiệu “Cảng Hoàng Anh”, số liệu 30ha và thông tin liên hệ với khách.
- Chưa deploy production.

## Bước tiếp theo

1. Gửi demo cho khách duyệt hướng gateway và hai landing page.
2. Xin bộ ảnh thật, logo bản vector/transparent và nội dung xác nhận.
3. Chốt schema nội dung trước khi làm CMS/admin và nối PostgreSQL.
4. Khi deploy: kiểm tra domain canonical, backup database/media live, giữ uploads persistent và thực hiện checklist hậu kiểm theo AGENTS.md.
