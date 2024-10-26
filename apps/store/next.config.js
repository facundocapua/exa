/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['api', 'ui'],
  images: {
    deviceSizes: [375, 430, 640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.exabeauty.com.ar',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
