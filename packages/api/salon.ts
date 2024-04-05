import type { Salon } from './types'
import { getMedusaUrl } from './utils/medusa'

export async function getSalons (): Promise<Array<Salon>> {
  const salons = fetch(`${getMedusaUrl()}/store/salons`)
    .then((res) => res.json())
    .then(data => {
      return data.salons
    })
    .then((salons) => {
      return salons.map((salon: Salon) => ({ ...salon, lat: Number(salon.lat), lng: Number(salon.lng) }))
    })

  return salons
}

export async function getSalon (salonId: Salon['id']): Promise<Salon | null> {
  const salon = fetch(
    `${getMedusaUrl()}/store/salons/${salonId}`,
    {
      next: {
        tags: ['salon', `salon-${salonId}`]
      }
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.salon
    })
    .then((salon) => {
      return { ...salon, lat: Number(salon.lat), lng: Number(salon.lng) }
    })

  return salon
}
