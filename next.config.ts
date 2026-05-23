import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: "/JohnManjeetSeed",
    assetPrefix: "/JohnManjeetSeed/",
    trailingSlash: true,
};

export default nextConfig;