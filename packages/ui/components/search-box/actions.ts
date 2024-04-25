'use server'

import { Product, searchProducts } from "api"

export const executeSearch = async (q: string): Promise<Product[]> => {
  return searchProducts(q)
}