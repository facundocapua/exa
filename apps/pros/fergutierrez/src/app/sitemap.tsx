import { STORE_URL } from '@/utils/const'
import { getProducts } from 'api'
import { MetadataRoute } from 'next'

const getUrls = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = STORE_URL
  const genericRoutes = [
    { route: '/', priority: 1, changeFrequency: 'weekly' },
    { route: '/studio', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/servicios', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/servicios/social', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/servicios/novias', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/servicios/cejas', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/automaquillaje', priority: 0.8, changeFrequency: 'monthly' },

    { route: '/tienda', priority: 0.5, changeFrequency: 'weekly' }
  ]

  const productRoutes = (await getProducts()).map(({ handle }) => {
    return { route: `/product/${handle}`, priority: 0.5, changeFrequency: 'weekly' }
  })

  const allRoutes = [...genericRoutes, ...productRoutes]

  return allRoutes.map(({ route, priority, changeFrequency }) => {
    return {
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority
    }
  }) as MetadataRoute.Sitemap
}

export default async function sitemap (): Promise<MetadataRoute.Sitemap> {
  const urls = await getUrls()

  return urls
}
