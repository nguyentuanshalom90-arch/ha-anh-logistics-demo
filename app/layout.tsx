import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hà Anh Logistics | Vận tải & Cảng biển Hải Phòng",
  description: "Hệ sinh thái vận tải, cảng và logistics tại Hải Phòng.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="vi"><body>{children}</body></html>;
}
