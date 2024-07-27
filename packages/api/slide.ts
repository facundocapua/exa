import { Slide } from './types'
import { getMedusaUrl } from './utils/medusa'

export const getFeaturedSlides = async (): Promise<Slide[]> => {
  const slides = fetch(
    `${getMedusaUrl()}/store/slides`,
    {
      next: {
        tags: ['slide']
      },
      cache: 'force-cache'
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.slides
    })

  return slides
}
