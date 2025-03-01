import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["supabase.co"], // Allows all Supabase-hosted images
  },
};

export default nextConfig;
