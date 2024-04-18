import { sleep } from './utils/general'
import { getMedusaUrl } from './utils/medusa'

export const getFeaturedBanners = async () => {
  await sleep(3000)
  const banners = fetch(`${getMedusaUrl()}/store/banners`)
    .then((res) => res.json())
    .then(data => {
      return data.banners
    })

  return banners
}
