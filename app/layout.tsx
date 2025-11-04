// app/layout.tsx
import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "الخليل للديكورات | تصميم وتنفيذ ديكورات",
  description: "الخليل للديكورات متخصصون في التصميم الداخلي وتنفيذ ديكورات حديثة ذات جودة عالية. نقدم خدمات التصميم، التشطيب، وديكورات المنازل والمكاتب.",
  keywords: [
    "ديكور",
    "تصميم داخلي",
    "ديكورات",
    "خدمات ديكور",
    "تشطيب",
    "ديكورات منازل السعودية",
    "ديكور الرياض",
    "ديكور جدة",
    "شركات ديكور",
  ],
  openGraph: {
    title: "الخليل للديكورات | تصميم وتنفيذ ديكور",
    description: "خدمات تصميم وتنفيذ ديكورات حديثة وعصرية.",
    url: "https://al-khaleel.vercel.app",
    siteName: "الخليل للديكورات",
    locale: "ar",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico", // حط أيقونة المشروع لو عندك
  },
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
