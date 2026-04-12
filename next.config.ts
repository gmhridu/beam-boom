import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  trailingSlash: false,

  reactCompiler: !isDev,

  typedRoutes: true,

  images: {
    unoptimized: false,

    qualities: [75, 82],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.pulse-clinic.co.uk",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
    ],
  },

  experimental: {
    typedEnv: true,
    viewTransition: true,
  },
};

export default nextConfig;
