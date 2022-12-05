/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      }
    ]
  },
  env: {
    stripe_public_key: process.env.STRIPE_PUBLIC_KEY
  }
}

module.exports = nextConfig


