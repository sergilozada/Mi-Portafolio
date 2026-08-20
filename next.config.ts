import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(isGitHubPagesBuild
    ? {
        basePath: "/Mi-Portafolio",
        assetPrefix: "/Mi-Portafolio/",
      }
    : {}),
  images: { unoptimized: true },
};

export default nextConfig;
