import type { Brand } from './types'
import { initClient } from './utils/supabase'
import { getMedusaUrl } from './utils/medusa'
import { get } from 'http'
import { getSalon } from './salon'

type BrandsFilter = {
  handle?: string
  isFeatured?: boolean
}

export const getBrands = async ({ handle, isFeatured }: BrandsFilter = {}): Promise<Array<Brand>> => {
  const params = new URLSearchParams()
  if (handle) {
    params.append('handle', handle)
  }

  if (isFeatured) {
    params.append('is_featured', 'true')
  }

  const brands = fetch(`${getMedusaUrl()}/store/brands?${params.toString()}`)
    .then((res) => res.json())
    .then(data => {
      return data.brands
    })

  return brands
}

export const getSalonBrands = async (salonId: string): Promise<Array<Brand>> => {
  const salon = await getSalon(salonId)

  return salon?.brands ?? []
}

export const getFeaturedBrands = async (): Promise<Array<Brand>> => {
  const data = getBrands({ isFeatured: true })

  return data
}

export const getBrand = async (handle: string): Promise<Brand | null> => {
  const brands = await getBrands({ handle })

  return brands[0] || null
}

export const getStoreFeaturedBrands = async (salonId: string): Promise<Array<Brand>> => {
  const brands = await (getSalonBrands(salonId))

  return brands.filter((brand) => brand.is_featured)
}
