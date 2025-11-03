// app/projects/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
}

function ProjectImage({ src, alt }: ProjectImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="w-full h-64 relative rounded-lg overflow-hidden shadow-lg">
      {/* Skeleton يظهر فقط إذا لم تُحمّل الصورة */}
      {!loaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition-opacity duration-500 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoadingComplete={() => setLoaded(true)}
      />
    </div>
  );
}

export default function Projects() {
  const projectImages = [
    {
      src: "https://i.pinimg.com/1200x/a6/46/ea/a646ea1d4641fd222712c049856af4e7.jpg",
      alt: "ديكورات داخلية",
    },
    {
      src: "https://i.pinimg.com/1200x/5f/f2/3a/5ff23aea3b9344ee528a0ad35652f045.jpg",
      alt: "ورق جدران مودرن",
    },
    {
      src: "https://i.pinimg.com/1200x/d9/f5/16/d9f5163330f6bffcc207d1e766b57b49.jpg",
      alt: "دهانات حديثة",
    },
    {
      src: "https://i.pinimg.com/1200x/f1/31/1b/f1311b55e027dd9cf2949153adc05d83.jpg",
      alt: "تصميم جبس بورد",
    },
    {
      src: "https://i.pinimg.com/1200x/14/1b/34/141b3464c0d4316f4420a0d2d40fccb7.jpg",
      alt: "مشروع دهانات احترافية",
    },
  
    {
      src: "https://i.pinimg.com/736x/57/e1/ac/57e1ac0538d5a5a8e4a09908a686071c.jpg",
      alt: "مشروع دهانات احترافية",
    },
  ];

  return (
    <main className="bg-gray-50 min-h-screen">
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">أحدث مشاريع الخليل للديكور في جدة</h1>
          <p className="text-gray-700 max-w-3xl mx-auto">
            نقدم لكم مجموعة مختارة من مشاريعنا المتميزة التي تجمع بين الدقة، الجودة العالية، واللمسات الإبداعية.
          </p>
          <p className="text-gray-700 max-w-3xl mx-auto mt-4">
            إذا أعجبتك إحدى أعمالنا، تواصل معنا على <span className="font-bold">555 555 555</span> للحصول على استشارة مجانية.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projectImages.map((img, idx) => (
              <ProjectImage key={idx} src={img.src} alt={img.alt} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
