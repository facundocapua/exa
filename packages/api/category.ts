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
        tags: ['categories'],
      },
      cache: 'force-cache'
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.product_categories
    })

  return categories
}

const filterActiveCategories = (categories: Array<Category>): Array<Category> => {
  
  const result = categories
  .filter((c) => c.is_active === undefined || c.is_active) // is_active is undefined for top level categories
  .map((c) => {
    return {
      ...c,
      category_children: filterActiveCategories(c.category_children)
    } as Category
  })

  return result
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
        tags: ['categories', 'top-level-categories'],
      },
      cache: 'force-cache'
    }
  )
    .then((res) => res.json())
    .then(data => {
      const activeCategories = filterActiveCategories(data.product_categories)
      return activeCategories
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
        tags: ['categories', `category-${handle}`],
      },
      cache: 'force-cache'
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.product_categories[0]
    })

  return data
}
