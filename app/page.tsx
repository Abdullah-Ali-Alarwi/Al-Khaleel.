// app/page.tsx
"use client";

import Image from "next/image";

export default function HomePage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* قسم المقدمة */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">لقد حان الوقت للتجديد مع الخليل للديكور في جدة</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            نحوّل منزلك أو مكتبك إلى لوحة فنية باستخدام أفضل خدمات الدهانات والديكورات في جدة، مع ضمان جودة عالية وتشطيبات فاخرة تضفي لمسة أناقة فريدة.
          </p>
          <p className="text-yellow-500 font-bold mt-4">+966 55 198 8785</p>
        </div>
      </section>

      {/* قسم الخدمات */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">خدماتنا</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            نقدم خدمات دهانات وديكورات متكاملة تعكس ذوقك وتمنح منزلك أو مكتبك حياة جديدة.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {/* خدمة الدهانات */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/8031901/pexels-photo-8031901.jpeg"
                alt="دهانات احترافية"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-gray-700">
                <h3 className="font-semibold mb-2">دهانات الخليل في جدة</h3>
                <p>
                  فريقنا يقدم أفضل خدمات الدهانات الداخلية والخارجية باستخدام أصباغ عالية الجودة مثل جوتن، لضمان ألوان دقيقة وتشطيبات تدوم طويلاً.
                </p>
              </div>
            </div>

            {/* خدمة الديكورات */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg"
                alt="ديكورات داخلية"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-gray-700">
                <h3 className="font-semibold mb-2">ديكورات الخليل في جدة</h3>
                <p>
                  خبراؤنا متخصصون في تنفيذ أحدث التصاميم العصرية والكلاسيكية، من جبس بورد، بديل الرخام والخشب، وورق الجدران، لتضفي لمسة فنية أنيقة.
                </p>
              </div>
            </div>

            {/* ورق الجدران */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7195886/pexels-photo-7195886.jpeg"
                alt="ورق جدران"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-gray-700">
                <h3 className="font-semibold mb-2">تركيب ورق الجدران</h3>
                <p>
                  نوفر أجمل تصاميم ورق الجدران مع تركيب احترافي سريع وبأسعار تنافسية، لتجديد منزلك أو مكتبك بلمسة فنية راقية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم من نحن */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">من نحن – الخليل للديكور في جدة</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            نحن نقدم حلولاً متكاملة للدهانات والديكورات الداخلية والخارجية بخبرة تفوق 10 سنوات، لضمان أعمال متقنة تعكس ذوق عملائنا وتضيف قيمة حقيقية لمنازلهم ومكاتبهم.
          </p>
          <ul className="text-gray-700 list-disc list-inside max-w-2xl mx-auto space-y-2">
            <li>معلمون متخصصون في جميع أنواع الدهانات والديكورات.</li>
            <li>استخدام أفضل المواد مثل جوتن، بديل الرخام، وبديل الخشب.</li>
            <li>التزام تام بالمواعيد وجودة عالية في التنفيذ.</li>
          </ul>
        </div>
      </section>

      {/* قسم لماذا نحن */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">لماذا تختارنا؟</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">خبراء معتمدون</h3>
              <p>أفضل معلمي الدهانات والديكورات في جدة بخبرة طويلة وشهادات معتمدة، لضمان تشطيبات دقيقة وفاخرة.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">جودة عالية</h3>
              <p>نستخدم أجود الخامات مع اهتمام بأدق التفاصيل لتقديم تشطيبات تدوم طويلاً وتعكس أعلى مستويات الجودة.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">أسعار مناسبة</h3>
              <p>نؤمن أن الجودة لا تعني الغلاء، لذلك نقدم أفضل الأسعار مع الحفاظ على مستوى حرفي متقدم.</p>
            </div>
          </div>
        </div>
      </section>

      {/* قسم المشاريع الأخيرة */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">بعض أعمالنا</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Image
              src="https://i.pinimg.com/1200x/14/1b/34/141b3464c0d4316f4420a0d2d40fccb7.jpg"
              alt="مشروع دهانات"
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <Image
              src="https://images.pexels.com/photos/7587365/pexels-photo-7587365.jpeg"
              alt="مشروع ديكورات"
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <Image
              src="https://images.pexels.com/photos/7546318/pexels-photo-7546318.jpeg"
              alt="مشروع ورق جدران"
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
