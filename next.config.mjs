/** @type {import('next').NextConfig} */
const prefix = process.env.NODE_ENV === "production" ? "https://jcurver.github.io/resume/" : "";

const nextConfig = {
  output: "export",
  assetPrefix: prefix,
};

export default nextConfig;
