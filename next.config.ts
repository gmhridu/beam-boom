import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: true,
  reactCompiler: !isDev,
  cacheComponents: false,
  typedRoutes: true,
  images: {
    unoptimized: true, // Required for static export - disables Next.js Image Optimization
    // Keep your existing image configuration
    qualities: [75, 82],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pulse-clinic.co.uk",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    typedEnv: true,
    viewTransition: true,
    ppr: false,
  },
};

export default nextConfig;
