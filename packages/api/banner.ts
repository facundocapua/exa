import { Banner } from './types'
import { getMedusaUrl } from './utils/medusa'

export const getFeaturedBanners = async (): Promise<Banner[]> => {
  const banners = fetch(
    `${getMedusaUrl()}/store/banners`,
    {
      next: {
        tags: ['banners']
      },
      cache: 'force-cache'
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.banners
    })

  return banners
}
