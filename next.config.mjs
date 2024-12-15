/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  trailingSlash: true,
  output: "export",
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://bank-app-server-69ir.onrender.com/:path*",
      },
    ];
  },
};

export default nextConfig;
