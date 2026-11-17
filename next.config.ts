import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about", destination: "/about-us", permanent: true },
      { source: "/vision-mission", destination: "/about-us", permanent: true },
      { source: "/services", destination: "/solutions", permanent: true },
      { source: "/certificates", destination: "/quality-certification", permanent: true },
      { source: "/reviews", destination: "/", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    qualities: [75, 90, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/kn1xn7zn/**",
      },
    ],
  },
};

export default nextConfig;
