import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/Mi-Portafolio",
  assetPrefix: "/Mi-Portafolio/",
  images: { unoptimized: true },
};

export default nextConfig;
