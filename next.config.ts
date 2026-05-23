import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    basePath: "/JohnManjeetSeed",
    assetPrefix: "/JohnManjeetSeed/",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;