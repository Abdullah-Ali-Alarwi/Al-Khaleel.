"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-6 m-4">

      {/* الخريطة على اليسار */}
      <div className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 rounded-xl overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          style={{ minHeight: "500px", border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.388438094355!2d39.172778!3d21.543333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d153e2c934c3%3A0xa1bb73a32eca8a29!2z2KfZhNmF2YrYp9mK2Kkg2KfZhNio2YrYp9mK2K_YsSDZhdit2KfZhtin2Iwg2LPZiNmE2YrYp9mK2YUg2YXYpNiq2LHYqNmK2KkgLSDYp9mE2LPZhtin2YXYp9ix2Kkg2KfZhNi52KjYqNmK2Kkg2KfZhNmD2YTYp9ip!5e0!3m2!1sar!2ssa!4v1730562230000!5m2!1sar!2ssa"
        ></iframe>
      </div>

      {/* صندوق المعلومات على اليمين */}
      <div className="p-6 rounded-xl shadow-lg w-full sm:w-4/5 md:w-1/2 lg:w-2/3 space-y-6 bg-gray-50">
        <div className="text-center space-y-2">
          <p className="text-gray-600">تواصل معنا</p>
          <h1 className="text-2xl font-bold text-gray-900">
            اتصل بنا - شركة الخليل للديكور – دهانات وديكورات
          </h1>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg space-y-3 leading-relaxed">
          <p className="font-semibold text-lg">تفاصيل الاتصال</p>
          <p className="text-gray-700">
            في شركة الخليل نضع راحة عملائنا في المقدمة، ونوفر وسائل متعددة للتواصل
            السريع. سواء كنت ترغب في استشارة مجانية أو طلب خدمة دهانات وديكورات،
            يمكنك الاتصال بنا أو مراسلتنا، وسنقوم بخدمتك بأسرع وقت.
          </p>
        </div>

        {/* معلومات الاتصال وحقول الإيميل */}
        <div className="flex flex-col lg:flex-row gap-6">
          
          {/* معلومات الاتصال */}
          <div className="space-y-4 text-gray-800 flex-1">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-500 text-xl" />
              <span>جدة – شارع الستين</span>
            </div>

            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500 text-xl" />
              <span>555 555 555</span>
            </div>

            <div className="flex items-center gap-2">
              <FaEnvelope className="text-red-500 text-xl" />
              <span>info@decorcities.com</span>
            </div>
          </div>

          {/* نموذج الإيميل */}
          <div className="flex-1">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="الاسم"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                placeholder="الإيميل"
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                placeholder="رسالتك"
                className="w-full p-2 border border-gray-300 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                إرسال
              </button>
            </form>
          </div>

        </div>

        <div>
          <p className="font-semibold mb-2">تابعنا على</p>
          <div className="flex gap-4 text-2xl text-gray-700">
            <a href="#" className="hover:text-red-600"><FaYoutube /></a>
            <a href="#" className="hover:text-blue-700"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
