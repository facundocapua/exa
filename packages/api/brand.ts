import type { Brand } from './types'
import { initClient } from './utils/supabase'

export const getBrands = async (): Promise<Array<Brand>> => {
  const client = initClient()
  const { data } = await client
    .from('brands')
    .select('*')
    .eq('is_active', true)

  if (!data) return []

  return data
}

export const getFeaturedBrands = async (): Promise<Array<Brand>> => {
  const client = initClient()
  const { data } = await client.from('brands').select('*').eq('is_featured', true)
  if (!data) return []

  return data
}

export const getBrand = async (slug: string): Promise<Brand | null> => {
  const client = initClient()
  const { data } = await client.from('brands').select('*').eq('slug', slug).single()

  return data
}
