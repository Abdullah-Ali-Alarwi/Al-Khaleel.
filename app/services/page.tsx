// app/services/page.tsx
"use client";

import Image from "next/image";

export default function Services() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* قسم المقدمة */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">خدمات الخليل للديكور في جدة</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            نقدم مجموعة متكاملة من خدمات الدهانات والديكورات لتلبية احتياجات المنازل والمكاتب والشركات. فريقنا من الخبراء والمعلمين المتخصصين يضمن لك نتائج احترافية تجمع بين الجمال والجودة.
          </p>
        </div>
      </section>

      {/* قسم الدهانات */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10 text-center">خدمات الدهانات</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-700">
              <p>
                نغطي جميع أعمال الدهانات في جدة بأعلى معايير الجودة، باستخدام أفضل أنواع الأصباغ والمواد لضمان مظهر أنيق يدوم طويلاً.
              </p>
              <p>
                فريقنا يقدم خدمات متكاملة للدهانات الداخلية والخارجية، مع استشارات لاختيار الألوان المثالية لمنزلك أو مكتبك.
              </p>
              <p>
                نحرص على تنفيذ المشاريع الكبيرة والصغيرة بنفس الاحترافية والدقة، لضمان نتائج مرضية بأسعار تنافسية.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-full h-64 md:h-80 relative">
                <Image
                  src="https://png.pngtree.com/png-vector/20250717/ourlarge/pngtree-freshly-painted-white-wall-with-paint-roller-closeup-in-studio-setting-png-image_16655205.png"
                  alt="خدمات دهانات"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full h-64 md:h-80 relative">
                <Image
                  src="https://images.pexels.com/photos/8031901/pexels-photo-8031901.jpeg"
                  alt="دهانات احترافية"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم الديكورات */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-10 text-center">خدمات الديكورات</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4 text-gray-700">
              <p>
                نحول منزلك أو مكتبك إلى تحفة فنية باستخدام أحدث تقنيات الديكورات، بما في ذلك الجبس بورد، ورق الجدران، بدائل الرخام والخشب، وأعمال الباركيه.
              </p>
              <p>
                معلمو الديكور لدينا متخصصون في تنفيذ التصاميم العصرية والكلاسيكية، لتوفير حلول عملية وجمالية في الوقت ذاته.
              </p>
              <p>
                تركيب ورق الجدران والفوم يعطي المكان لمسة فنية أنيقة، مع اختيار النقوش والألوان بعناية لتجديد أي مساحة بسهولة وفعالية.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-full h-64 md:h-80 relative">
                <Image
                  src="https://i.pinimg.com/736x/c5/1f/74/c51f7415782974ff27572bf87778e7bb.jpg"
                  alt="ديكورات داخلية"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="w-full h-64 md:h-80 relative">
                <Image
                  src="https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg"
                  alt="ورق جدران"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* قسم خدمات إضافية */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-10">خدمات إضافية</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-gray-700">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">عوازل الصوت</h3>
              <p>تقنيات حديثة لعزل الصوت لتوفير الراحة والهدوء في منزلك أو مكتبك.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">دهان أبواب خشب</h3>
              <p>تشطيبات عالية الجودة لأبوابك الخشبية باستخدام أفضل المواد.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">معلم فوم</h3>
              <p>تنفيذ تصاميم فوم مبتكرة لتزيين الأسقف والجدران بشكل فني وجمالي.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">تركيب باركيه</h3>
              <p>أرضيات باركيه أنيقة وعملية تضفي لمسة فاخرة لأي مساحة.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">بديل الرخام والخشب</h3>
              <p>حلول اقتصادية وعصرية تحاكي الرخام والخشب الطبيعي بجودة عالية.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">معلم جبس</h3>
              <p>تنفيذ أعمال الجبس بورد لجميع الأسقف والجدران مع تشطيبات مميزة.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
