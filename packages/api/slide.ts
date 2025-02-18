import { Slide, Salon } from './types'
import { getMedusaUrl } from './utils/medusa'

export const getFeaturedSlides = async (salonId?: Salon['id']): Promise<Slide[]> => {
  const slides = fetch(
    `${getMedusaUrl()}/store/slides${salonId ? `?salon_id=${salonId}` : ''}`,
    {
      next: {
        tags: ['slide', `salon-${salonId ?? 'global'}`]
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
