/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['api', 'ui'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mtelzvckwsdkcqbvwewx.supabase.co',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

module.exports = nextConfig
