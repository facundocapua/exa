import { STORE_URL } from '@/utils/const'
import { MetadataRoute } from 'next'

const getUrls = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = STORE_URL
  const genericRoutes = [
    { route: '/', priority: 1, changeFrequency: 'weekly' },
    { route: '/sobre-mi', priority: 1, changeFrequency: 'monthly' },
    { route: '/portfolio', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/studio', priority: 0.8, changeFrequency: 'monthly' },
    { route: '/servicios', priority: 0.8, changeFrequency: 'monthly' },

    { route: '/tienda', priority: 0.5, changeFrequency: 'weekly' }
  ]

  const allRoutes = [...genericRoutes]

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
