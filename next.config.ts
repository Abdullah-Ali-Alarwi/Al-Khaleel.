import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // يسمح بعرض أي صورة من أي مكان
  },
};

export default nextConfig;
