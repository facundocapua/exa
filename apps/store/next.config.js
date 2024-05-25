/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.mercadopago.com *.mlstatic.com;
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: *.mercadopago.com *.mlstatic.com *.mercadolibre.com *.mercadolivre.com;
    font-src 'self' *.mlstatic.com;
    connect-src 'self' *.mercadopago.com *.mercadolibre.com;
    frame-src 'self' *.mercadopago.com *.mercadolibre.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
`

const nextConfig = {
  experimental: {
    serverActions: true
  },
  reactStrictMode: true,
  transpilePackages: ['api', 'ui'],
  images: {
    deviceSizes: [375, 430, 640, 750, 828, 1080, 1200, 1920],
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
  },
  async headers () {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, '')
          }
        ]
      }
    ]
  }
}

module.exports = nextConfig
