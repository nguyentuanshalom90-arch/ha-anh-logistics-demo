# Hà Anh Logistics demo

Demo concept cho website doanh nghiệp vận tải và cảng biển tại Hải Phòng.

## Chạy local

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Prisma / PostgreSQL

Copy `.env.example` thành `.env`, đặt `DATABASE_URL`, sau đó chạy:

```bash
npx prisma generate
npx prisma db push
```

Form liên hệ có API tại `/api/inquiries` và model `Inquiry` trong Prisma.
