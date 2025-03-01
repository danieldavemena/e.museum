import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["https://jiscwaegdmzykllfshpd.supabase.co"], // Allows all Supabase-hosted images
  },
};

export default nextConfig;
