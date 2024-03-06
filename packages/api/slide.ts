import { getMedusaUrl } from './utils/medusa'

export const getFeaturedSlides = async () => {
  const slides = fetch(`${getMedusaUrl()}/store/slides`)
    .then((res) => res.json())
    .then(data => {
      return data.slides
    })

  return slides
}
