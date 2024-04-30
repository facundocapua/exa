import { MetadataRoute } from 'next'

export default function robots (): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/checkout/',
        '/account/',
        '/search/',
        '/api/',
        '/mercadopago/',
        '/order/'
      ]
    },
    sitemap: 'https://exabeauty.com.ar/sitemap.xml'
  }
}
