/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // потрібно для next export
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // потрібно для GitHub Pages
  },

  // Підтримка GitHub Pages
  basePath: isProd ? '/v0-the-bvrly-website' : '',
  assetPrefix: isProd ? '/v0-the-bvrly-website/' : '',
};

export default nextConfig;
