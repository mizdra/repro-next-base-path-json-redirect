/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/base',
  async redirects() {
    return [
      { source: '/', destination: '/base', basePath: false, permanent: false }
    ]
  }
};

export default nextConfig;
