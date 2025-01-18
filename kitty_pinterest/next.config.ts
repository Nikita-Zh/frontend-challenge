import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const nextConfig: NextConfig = {
  /* config options here */
  // basePath: "frontend-challenge",
  // output: "export",

  reactStrictMode: true,
  assetPrefix: isProd ? "/frontend-challenge/" : "",
  basePath: isProd ? "/frontend-challenge" : "",
  output: "export",

  images: {
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
