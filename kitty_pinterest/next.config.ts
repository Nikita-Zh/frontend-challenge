import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "cdn2.thecatapi.com",
        protocol: 'https',
        port: '',
        search: '',
      },
      {
        hostname: "*.media.tumblr.com",
        protocol: 'https',
        port: '',
        search: '',
      },
    ],
  },
};

export default nextConfig;
