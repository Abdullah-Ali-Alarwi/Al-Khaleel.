// app/components/Footer.tsx
"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* معلومات الاتصال */}
        <div>
          <h3 className="text-lg font-semibold mb-4">معلومات الاتصال</h3>
          <p>السعودية – جدة – شارع الستين</p>
      <p className="text-yellow-500 font-bold mt-4" dir="ltr">
  +966 55 198 8785
</p>

          <p>info@decorcities.com</p>
        </div>

        {/* الروابط السريعة */}
        <div>
          <h3 className="text-lg font-semibold mb-4">الروابط السريعة</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-yellow-400">مدائن الديكور بجدة</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">الاسئلة الشائعة</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">مشاريعنا</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">خدماتنا</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">اتصل بنا</Link></li>
          </ul>
        </div>

        {/* خدماتنا */}
        <div>
          <h3 className="text-lg font-semibold mb-4">خدماتنا</h3>
          <ul className="space-y-2">
            <li><Link href="#" className="hover:text-yellow-400">معلم دهانات جدة</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">معلم ديكورات جدة</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">تركيب ورق جدران بجدة</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">معلم جبس بورد جدة</Link></li>
          </ul>
        </div>
      </div>

      {/* أسفل الفوتر */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        <span>الخليل للديكور</span> | &copy; 2025 الخليل الديكور بجدة
        <div className="flex justify-center mt-3 space-x-4 text-white text-lg">
          <Link href="#" className="hover:text-yellow-400"><FaFacebookF /></Link>
          <Link href="#" className="hover:text-yellow-400"><FaTwitter /></Link>
          <Link href="#" className="hover:text-yellow-400"><FaInstagram /></Link>
          <Link href="#" className="hover:text-yellow-400"><FaWhatsapp /></Link>
        </div>
      </div>
    </footer>
  );
}
