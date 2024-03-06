import { getMedusaUrl } from './utils/medusa'

export const getFeaturedBanners = async () => {
  const banners = fetch(`${getMedusaUrl()}/store/banners`)
    .then((res) => res.json())
    .then(data => {
      return data.banners
    })

  return banners
}
