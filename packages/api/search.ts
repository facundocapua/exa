import { Filter, Product } from "./types"
import { getMedusaUrl } from "./utils/medusa"
import { getFiltersFromProducts } from "./product"
import { applyFilters } from "./utils/filters"

export const searchProducts = async (q: string) => {
  const params = new URLSearchParams({
    q,
    expand: 'categories,images,variants,brand',
  })

  const products: Array<Product> = await fetch(
    `${getMedusaUrl()}/store/products?${params.toString()}`,
    {
      next: {
        tags: ['products']
      }
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.products
    })

  return products
}

type GetSearchProductsRequest = {
  filters: Record<string, string>
  q: string
  exclude?: string[]
}

type GetSearchProductsResponse = {
  filters: Array<Filter>
  products: Array<Product>
  total: number
}

export const getFilteredSearchProducts = async ({ filters, q, exclude = [] }: GetSearchProductsRequest): Promise<GetSearchProductsResponse> => {
  const restrictedData = await searchProducts(q)

  const filteredData = applyFilters(restrictedData, filters)

  return new Promise((resolve) => {
    resolve({
      products: filteredData,
      filters: getFiltersFromProducts(restrictedData, exclude),
      total: restrictedData.length
    })
  })
}
