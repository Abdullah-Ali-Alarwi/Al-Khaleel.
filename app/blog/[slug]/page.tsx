"use client";

import Image from "next/image";
import { useParams, notFound } from "next/navigation";

const blogPosts = [
  {
    id: 1,
    title: "أحدث اتجاهات الديكور لعام 2025",
    summary: "استكشف أحدث الأساليب والمواد في تصميم الديكورات الداخلية والخارجية لتجعل منزلك عصريًا وأنيقًا.",
    content: "هذه تفاصيل المقال الكاملة... اكتب هنا المحتوى الحقيقي لاحقًا.",
    imageUrl: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg",
    slug: "decor-trends-2025",
  },
  {
    id: 2,
    title: "كيفية اختيار ألوان الدهانات المناسبة لمنزلك",
    summary: "دليلك لاختيار ألوان متناسقة تضفي طابعًا هادئًا وعصريًا.",
    content: "هذا نص المقال حول اختيار الألوان بطريقة احترافية...",
    imageUrl: "https://images.pexels.com/photos/8031901/pexels-photo-8031901.jpeg",
    slug: "paint-color-tips",
  },
  {
    id: 3,
    title: "أفكار مبتكرة لتركيب ورق الجدران",
    summary: "طرق ذكية لتجديد جدران منزلك باستخدام ورق الجدران.",
    content: "تفاصيل أفكار تركيب ورق الجدران وفن التزيين...",
    imageUrl: "https://images.pexels.com/photos/7195886/pexels-photo-7195886.jpeg",
    slug: "wallpaper-ideas",
  },
];

export default function BlogPostPage() {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <main className="px-6 py-12 container mx-auto">
      <div className="relative w-full h-80 rounded-lg overflow-hidden mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{post.summary}</p>

      <article className="text-gray-800 leading-relaxed text-lg">
        {post.content}
      </article>
    </main>
  );
}
