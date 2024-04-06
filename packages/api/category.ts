import type { Category } from './types'
import { getMedusaUrl } from './utils/medusa'

export const getCategories = async (): Promise<Array<Category>> => {
  const params = new URLSearchParams({
    include_descendants_tree: 'true'
  })
  const categories = fetch(
    `${getMedusaUrl()}/store/product-categories?${params.toString()}`,
    {
      next: {
        tags: ['categories']
      }
    }
  )
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
  const categories = fetch(
    `${getMedusaUrl()}/store/product-categories?${params.toString()}`,
    {
      next: {
        tags: ['categories']
      }
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.product_categories
    })

  return categories
}

export const getCategory = async (handle: string): Promise<Category | null> => {
  const params = new URLSearchParams({
    handle,
    include_descendants_tree: 'true'
  })
  const data = fetch(
    `${getMedusaUrl()}/store/product-categories?${params.toString()}`,
    {
      next: {
        tags: ['categories', `category-${handle}`]
      }
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.product_categories[0]
    })

  return data
}
