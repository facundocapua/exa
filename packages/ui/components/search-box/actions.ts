'use server'

import type { Product } from 'api'
import { getSalon, searchProducts } from 'api'

export const executeSearch = async (q: string): Promise<Product[]> => {
  const salonId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (salonId) {
    const salon = await getSalon(salonId)
    return searchProducts(q, salon?.sales_channel_id)
  }

  return searchProducts(q)
}
