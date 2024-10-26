/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['api', 'ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.exabeauty.com.ar',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
