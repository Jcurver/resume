/** @type {import('next').NextConfig} */
const prefix = process.env.NODE_ENV === "production" ? "https://yeji-j.github.io/test/" : "";

const nextConfig = {
  output: "export",
  assetPrefix: prefix,
};

export default nextConfig;
