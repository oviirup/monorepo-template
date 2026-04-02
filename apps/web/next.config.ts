import { NextConfig } from "next";

const config: NextConfig = {
  reactCompiler: true,
  typescript: { ignoreBuildErrors: true },
  transpilePackages: ["@oviirup/ui"],
};

export default config;
