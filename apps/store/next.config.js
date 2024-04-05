/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true
  },
  reactStrictMode: true,
  transpilePackages: ['api', 'ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mtelzvckwsdkcqbvwewx.supabase.co',
        port: '',
        pathname: '/**'
      },
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
