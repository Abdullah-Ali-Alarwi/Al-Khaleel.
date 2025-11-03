// app/about/page.tsx
"use client";

import Image from "next/image";

export default function About() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* قسم الترحيب */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">أهلاً بك في الخليل للديكور – جدة</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            نحن شريكك الأمثل في تحويل المساحات إلى أماكن تجمع بين الجمال والوظيفة. فريقنا المتخصص يسعى لتقديم دهانات وديكورات عالية الجودة تضفي لمسة أناقة على منزلك أو مكتبك.
          </p>
        </div>
      </section>

      {/* قسم الرؤية */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-4">رؤيتنا</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            نهدف لأن نصبح الخيار الأول للعملاء في جدة عند الحديث عن الدهانات والديكورات، من خلال تقديم حلول مبتكرة تجمع بين التصميم العصري، الجودة العالية، والراحة في الاستخدام.
          </p>
        </div>
      </section>

      {/* قسم التقنيات الحديثة */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-10">أحدث التقنيات التي نعتمدها</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* نص */}
            <div className="text-gray-700 space-y-4">
              <p>
                في الخليل للديكور، نحرص على دمج الخبرة مع أحدث الأساليب في الدهانات والديكورات، لضمان تحقيق نتائج فريدة تناسب كل مساحة وذوق شخصي.
              </p>
              <p>
                نقدم دهانات مقاومة للرطوبة، صديقة للبيئة، وذات تغطية متجانسة وسطح ناعم يدوم طويلاً، باستخدام تقنيات الرش الحديثة التي توفر دقة واحترافية في كل تفاصيل العمل.
              </p>
              <p>
                في مجال الديكورات، نعتمد على تركيب الجبس بورد بأشكال مبتكرة، مع الإضاءات المخفية LED التي تضيف جوًا من الفخامة. كما نوفر بدائل طبيعية للرخام والخشب، وورق جدران ثلاثي الأبعاد، وتقنيات الفوم لتصميم غرف فنية تجمع بين الجمال والوظيفة.
              </p>
              <p>
                مزيج من الابتكار والخبرة يضمن لك ديكورات ودهانات راقية تعكس شخصيتك وتدوم لسنوات طويلة دون المساومة على الجودة.
              </p>
            </div>

            {/* صور توضيحية */}
            <div className="space-y-6">
              <Image 
                src="https://i.pinimg.com/1200x/22/c2/02/22c2021c6d7d84ea3c974bde376c7c34.jpg" 
                alt="تصميم مطبخ 3D" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
              <Image 
                src="https://i.pinimg.com/736x/02/4e/93/024e93f779ddf66eda01a6373b895d35.jpg" 
                alt="غرفة نوم باستيلي" 
                width={600} 
                height={400} 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* قسم الإحصائيات */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-10">أرقام تبرز خبرتنا</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          <div>
            <p className="text-4xl font-bold text-yellow-500">350+</p>
            <p className="text-gray-700 mt-2">مشروع مكتمل</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-500">435</p>
            <p className="text-gray-700 mt-2">عميل سعيد</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-yellow-500">15</p>
            <p className="text-gray-700 mt-2">سنة خبرة</p>
          </div>
        </div>
      </section>
    </main>
  );
}
