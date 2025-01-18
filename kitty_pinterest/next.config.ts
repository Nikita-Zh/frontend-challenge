import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? "/frontend-challenge/" : "",
  basePath: isProd ? "/frontend-challenge" : "",

  images: {
    // unoptimized: isProd ? true : false,
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "cdn2.thecatapi.com",
        protocol: "https",
        port: "",
        search: "",
      },
      {
        hostname: "*.media.tumblr.com",
        protocol: "https",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
