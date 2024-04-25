import { getBrands, getCategories, getProducts } from 'api'
import { MetadataRoute } from 'next'

const getUrls = async (): Promise<MetadataRoute.Sitemap> => {
  const baseUrl = 'https://exabeauty.com.ar'
  const genericRoutes = [
    { route: '/', priority: 1, changeFrequency: 'weekly' },
    { route: '/stores', priority: 1, changeFrequency: 'monthly' }
  ]

  const categoryRoutes = (await getCategories()).map(({ handle }) => {
    return { route: `/${handle}`, priority: 0.8, changeFrequency: 'weekly' }
  })

  const brandRoutes = (await getBrands()).map(({ handle }) => {
    return { route: `/brand/${handle}`, priority: 0.8, changeFrequency: 'weekly' }
  })

  const productRoutes = (await getProducts()).map(({ handle }) => {
    return { route: `/product/${handle}`, priority: 0.5, changeFrequency: 'weekly' }
  })

  const allRoutes = [...genericRoutes, ...categoryRoutes, ...brandRoutes, ...productRoutes]

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
