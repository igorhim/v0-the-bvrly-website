/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',    // ключ для статичного експорту Next.js 13–15
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // потрібно для next export
  },

  // GitHub Pages потребує basePath + assetPrefix
  basePath: isProd ? '/v0-the-bvrly-website' : '',
  assetPrefix: isProd ? '/v0-the-bvrly-website/' : '',
};

export default nextConfig;
