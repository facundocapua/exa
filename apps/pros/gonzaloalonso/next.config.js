/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  reactStrictMode: true,
  transpilePackages: ['api', 'ui'],
}

module.exports = nextConfig
