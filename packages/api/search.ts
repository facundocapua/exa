import { Filter, Product } from "./types"
import { getMedusaUrl } from "./utils/medusa"
import { getFiltersFromProducts } from "./product"
import { applyFilters } from "./utils/filters"

export const searchProducts = async (q: string, salesChannelId?: string) => {
  const params = new URLSearchParams({
    q,
    expand: 'categories,images,variants,brand',
  })

  if (salesChannelId) {
    params.append('sales_channel_id[]', salesChannelId)
  }

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
  salesChannelId?: string
  q: string
  exclude?: string[]
}

type GetSearchProductsResponse = {
  filters: Array<Filter>
  products: Array<Product>
  total: number
}

export const getFilteredSearchProducts = async ({ filters, salesChannelId, q, exclude = [] }: GetSearchProductsRequest): Promise<GetSearchProductsResponse> => {
  const restrictedData = await searchProducts(q, salesChannelId)

  const filteredData = applyFilters(restrictedData, filters)
  filteredData.sort((a, b) => {
    const aInStock = Number(a?.variants?.[0]?.inventory_quantity ?? 0) > 0 ? 1 : 0
    const bInStock = Number(b?.variants?.[0]?.inventory_quantity ?? 0) > 0 ? 1 : 0

    return bInStock - aInStock
  })

  return new Promise((resolve) => {
    resolve({
      products: filteredData,
      filters: getFiltersFromProducts(restrictedData, exclude),
      total: restrictedData.length
    })
  })
}
