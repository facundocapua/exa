import type { Category } from './types'
import { initClient } from './utils/supabase'
import { getMedusaUrl } from './utils/medusa'

export const getCategories = async (): Promise<Array<Category>> => {
  const params = new URLSearchParams({
    include_descendants_tree: 'true'
  })
  const categories = fetch(`${getMedusaUrl()}/store/product-categories?${params.toString()}`)
    .then((res) => res.json())
    .then(data => {
      return data.product_categories
    })

  return categories
}

export const getTopLevelCategories = async (): Promise<Array<Category>> => {
  const params = new URLSearchParams({
    parent_category_id: 'null',
    include_descendants_tree: 'true'
  })
  const categories = fetch(`${getMedusaUrl()}/store/product-categories?${params.toString()}`)
    .then((res) => res.json())
    .then(data => {
      return data.product_categories
    })

  return categories
}

export const getFeaturedCategories = async (): Promise<Array<Category>> => {
  const client = initClient()
  const { data } = await client
    .from('categories')
    .select('*')
    .eq('is_featured', true)
    .order('sort', { ascending: true })
    .returns<Array<Category>>()

  if (!data) return []

  return data
}

export const getCategory = async (handle: string): Promise<Category | null> => {
  const params = new URLSearchParams({
    handle,
    include_descendants_tree: 'true'
  })
  const data = fetch(`${getMedusaUrl()}/store/product-categories?${params.toString()}`)
    .then((res) => res.json())
    .then(data => {
      return data.product_categories[0]
    })

  return data
}
