import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['assets.aceternity.com',"images.unsplash.com"]
  },
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during the build process
  },
};

export default nextConfig;
