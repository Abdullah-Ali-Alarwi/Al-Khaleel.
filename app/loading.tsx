// app/loading.tsx
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* شعار أو أيقونة */}
      <div className="w-32 h-32 bg-gray-900 rounded-full animate-pulse mb-8 shadow-lg flex items-center justify-center">
        <span className="text-2xl font-bold text-white">الخليل </span>
      </div>

      {/* نص التحميل */}
      <p className="text-3xl md:text-5xl font-bold text-gray-700 mb-6 animate-pulse">
        جاري التحميل...
      </p>

      {/* سكافولد للنصوص أو الأقسام */}
      <div className="space-y-4 w-11/12 max-w-xl">
        <div className="h-6 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 bg-gray-300 rounded animate-pulse w-5/6"></div>
        <div className="h-6 bg-gray-300 rounded animate-pulse w-4/6"></div>
      </div>
    </div>
  );
}
