/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // O quita 'output' para clásico en SSR
  images: {
    unoptimized: true,
  }
};

module.exports = nextConfig;