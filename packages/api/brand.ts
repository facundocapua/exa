import type { Brand } from './types'
import { initClient } from './utils/supabase'
import { getMedusaUrl } from './utils/medusa'
import { get } from 'http'

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

export const getStoreBrands = async (storeId: string): Promise<Array<Brand>> => {
  const client = initClient()
  const { data } = await client
    .from('brands')
    .select('stores_brands!inner(*), *')
    .eq('stores_brands.store', storeId)

  if (!data) return []

  return data
}

export const getFeaturedBrands = async (): Promise<Array<Brand>> => {
  const data = getBrands({ isFeatured: true })

  return data
}

export const getBrand = async (handle: string): Promise<Brand | null> => {
  const brands = await getBrands({ handle })

  return brands[0] || null
}

export const getStoreFeaturedBrands = async (storeId: string): Promise<Array<Brand>> => {
  const client = initClient()
  const { data } = await client
    .from('brands')
    .select('stores_brands!inner(*), *')
    .eq('stores_brands.store', storeId)
    .eq('is_featured', true)

  if (!data) return []

  return data
}
