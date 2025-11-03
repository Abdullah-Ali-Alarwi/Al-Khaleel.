// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "الخليل للديكور - جدة",
  description: "أفضل خدمات الدهانات والديكورات في جدة من الخليل للديكور",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
