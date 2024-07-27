import { STORE_URL } from '@/utils/const'
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
        '/mercadopago/',
        '/order/',
        '/arrepentimiento/',
        '/terminos-y-condiciones/'
      ]
    },
    sitemap: `${STORE_URL}/sitemap.xml`
  }
}
