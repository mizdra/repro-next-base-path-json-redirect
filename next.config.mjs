/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/base',
  experimental: {
    nodeMiddleware: true,
  },
};

export default nextConfig;
