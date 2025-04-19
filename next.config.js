/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      's3.coinmarketcap.com',
      'static-gravity.s3.amazonaws.com',
      'images.unsplash.com',
      'localhost'
    ],
  },
  output: 'export',
  distDir: 'out',
}

module.exports = nextConfig 