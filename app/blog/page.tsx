// app/blog/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  slug: string; // رابط المقال المفترض
}

// بيانات تجريبية للمقالات
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "أحدث اتجاهات الديكور لعام 2025",
    summary: "استكشف أحدث الأساليب والمواد في تصميم الديكورات الداخلية والخارجية لتجعل منزلك عصريًا وأنيقًا.",
    imageUrl: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg",
    slug: "decor-trends-2025",
  },
  {
    id: 2,
    title: "كيفية اختيار ألوان الدهانات المناسبة لمنزلك",
    summary: "دليلك لاختيار ألوان متناسقة تضفي طابعًا هادئًا وعصريًا على كل غرفة من منزلك.",
    imageUrl: "https://images.pexels.com/photos/8031901/pexels-photo-8031901.jpeg",
    slug: "paint-color-tips",
  },
  {
    id: 3,
    title: "أفكار مبتكرة لتركيب ورق الجدران",
    summary: "طرق ذكية لتجديد جدران منزلك باستخدام ورق الجدران والفوم بطرق فنية أنيقة.",
    imageUrl: "https://images.pexels.com/photos/7195886/pexels-photo-7195886.jpeg",
    slug: "wallpaper-ideas",
  },
];

export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* مقدمة المدونة */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">مدونة الخليل للديكور في جدة</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            اكتشف أحدث النصائح، الأفكار، والاتجاهات في عالم الدهانات والديكورات. نصائح، مشاريع، وأخبار ستلهمك لتجديد منزلك أو مكتبك.
          </p>
        </div>
      </section>

      {/* قائمة المقالات */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="relative w-full h-56">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-gray-700">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="mb-4">{post.summary}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block text-yellow-500 font-semibold hover:underline"
                >
                  قراءة المزيد
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
