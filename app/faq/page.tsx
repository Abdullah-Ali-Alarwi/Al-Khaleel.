// app/faq/page.tsx
"use client";

import React, { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "ما هو دور معلم البروفايل؟",
    answer: "معلم البروفايل هو المتخصص في إنهاء واجهات المباني بشكل أنيق وعملي. يستخدم دهان البروفايل عالي الجودة ويختار الألوان المناسبة مع مراعاة مقاومة الطقس لتبقى الواجهة جذابة لسنوات."
  },
  {
    question: "كم تكلفة الدهان لكل متر مربع؟",
    answer: "التكلفة تعتمد على نوع الدهان والمساحة المطلوبة. نحن نوفر تقييم مخصص لكل مشروع لضمان أفضل سعر مقابل جودة عالية."
  },
  {
    question: "ما هي أفضل الخيارات للدهانات الداخلية؟",
    answer: "ننصح باستخدام دهانات صديقة للبيئة منخفضة الروائح، مع تشطيبات متجانسة وناعمة تعطي الغرف مظهرًا متجدد وأنيق."
  },
  {
    question: "ما هي أنواع ورق الجدران المناسبة؟",
    answer: "يوجد تصاميم متعددة تناسب كل الأذواق، بما في ذلك الحديثة والكلاسيكية، مقاومة للرطوبة وسهلة التركيب والصيانة."
  },
  {
    question: "ما الفرق بين الشيبورد التقليدي وبديله؟",
    answer: "بديل الشيبورد أخف وزناً وأكثر مقاومة للرطوبة، بينما الشيبورد التقليدي يحتاج لعناية أكبر ويستخدم عادة في التشطيبات الداخلية فقط."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [heights, setHeights] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const updateHeights = () => {
      setHeights(contentRefs.current.map(el => (el ? el.scrollHeight : 0)));
    };

    // initialize heights and update on resize
    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => {
      window.removeEventListener("resize", updateHeights);
    };
  }, []);

  return (
    <main className="p-6">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              {/* زر السؤال */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 transition flex justify-between items-center"
              >
                <span className="font-medium">{faq.question}</span>
                <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
              </button>

              {/* الإجابة */}
              <div
                ref={(el) => { contentRefs.current[index] = el; }}
                style={{
                  height: openIndex === index ? `${heights[index] ?? 0}px` : "0px",
                  opacity: openIndex === index ? 1 : 0,
                  transition: "height 0.4s ease, opacity 0.4s ease",
                  overflow: "hidden"
                }}
                className="px-6 text-gray-700 bg-white"
              >
                <p className="py-4">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
