import { Image } from '@medusajs/medusa'
import { getSalonBrands } from './brand'
import type { Collection, Filter, Product, ProductVariant } from './types'
import type { FiltersType } from './utils/filters'
import { applyFilters, applyRestrinctions, extractBrandFilter, extractCategoryFilter, extractPriceFilter } from './utils/filters'
import { getMedusaUrl } from './utils/medusa'
import { getSalon } from './salon'

export const getProductVariants = async (variantIds: string[]): Promise<Array<ProductVariant>> => {
  const params = new URLSearchParams({
    expand: 'prices',
    ids: variantIds.join(','),
    currency_code: 'ars'
  })
  const products = fetch(
    `${getMedusaUrl()}/store/variants?${params.toString()}`,
    {
      next: {
        tags: ['variants']
      },
      cache: 'force-cache'
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.variants
    })

  return products
}

type ProductParams = {
  expand?: string
  currency_code?: string
  category_id?: string[]
  collection_id?: string[]
  brand_id?: string[]
  handle?: string,
  ids?: string[],
  sales_channel_id?: string[]
}

export const getProducts = async ({ category_id, collection_id, brand_id, handle, ids, sales_channel_id }: Partial<ProductParams> = {}): Promise<Array<Product>> => {
  
  const params = new URLSearchParams({
    expand: 'categories,images,variants,brand,options',
    currency_code: 'ars'
  })

  if (category_id) {
    for (const catId of category_id) {
      params.append('category_id[]', catId)
    }
  }

  if (collection_id) {
    for (const colId of collection_id) {
      params.append('collection_id[]', colId)
    }
  }

  if (brand_id) {
    for (const brandIds of brand_id) {
      params.append('brand_id[]', brandIds)
    }
  }

  if (handle) {
    params.append('handle', handle)
  }

  if (ids) {
    for (const id of ids) {
      params.append('id[]', id)
    }
  }

  if (sales_channel_id) {
    for (const salesChannelId of sales_channel_id) {
      params.append('sales_channel_id[]', salesChannelId)
    }
  }

  const products: Array<Product> = await fetch(
    `${getMedusaUrl()}/store/products?${params.toString()}`,
    {
      next: {
        tags: ['products']
      },
      cache: 'force-cache'
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.products
    })

  const variantsIds = products.map((product) => product.variants.map((variant) => variant.id)).flat()
  const variants = await getProductVariants(variantsIds)

  products.forEach((product) => {
    product.variants = variants.filter((variant) => product.id === variant.product_id)
    product.price = product.variants[0]?.original_price ?? 0
    product.salePrice = product.variants[0]?.calculated_price ?? 0

    product.variants.forEach((variant: ProductVariant) => {
      if (variant?.metadata?.image) {
        const imageIndex = product.images.findIndex((image) => image.url === variant?.metadata?.image)
        if (imageIndex > -1) {
          variant.images = [product.images[imageIndex] as Image]
          product.images.splice(imageIndex, 1)
        }
      }
    })
  })

  return products
}

export const getStoreFeaturedProducts = async (salonId: string): Promise<Array<Product>> => {
  const salon = await getSalon(salonId)

  const brands = await getSalonBrands(salonId)
  const brandIds = brands.map((brand) => brand.id)

  return getProducts({ brand_id: brandIds, sales_channel_id: [salon?.sales_channel_id ?? ''] })
}

export const getFiltersFromProducts = (products: Array<Product>, exclude: Array<string> = []): Array<Filter> => {
  const filters = []

  if (!exclude.includes('category')) {
    const categoryFilter = extractCategoryFilter(products)
    if (categoryFilter.options.length > 1) {
      filters.push(categoryFilter)
    }
  }

  if (!exclude.includes('brand')) {
    const brandFilter = extractBrandFilter(products)
    if (brandFilter.options.length > 1) {
      filters.push(brandFilter)
    }
  }

  if (!exclude.includes('price')) {
    const priceFilter = extractPriceFilter(products)
    const [min, max] = priceFilter.options.map((option) => option.value)
    if (min !== max) {
      filters.push(priceFilter)
    }
    
  }

  return filters
}

type GetFilteredProductsType = {
  filters: FiltersType
  restrinctions?: FiltersType
  exclude?: Array<string>
  salesChannelId?: string
}

type GetCategoryProductsResponse = {
  filters: Array<Filter>
  products: Array<Product>
  total: number
}

export const getFilteredProducts = async ({ filters, restrinctions, exclude = [], salesChannelId }: GetFilteredProductsType): Promise<GetCategoryProductsResponse> => {
  const params = await applyRestrinctions(restrinctions ?? {}) as ProductParams
  if(salesChannelId) {
    params.sales_channel_id = [salesChannelId]
  }

  const restrictedData = await getProducts(params)

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

export const getProduct = async (handle: string): Promise<Product | null> => {
  const products = await getProducts({ handle })

  return products[0] ?? null
}

export const getProductVariant = async (id: ProductVariant['id']): Promise<ProductVariant | null> => {
  const params = new URLSearchParams({
    currency_code: 'ars'
  })
  const variant = fetch(`${getMedusaUrl()}/store/variants/${id}?${params.toString()}`)
    .then((res) => res.json())
    .then(data => {
      return data.variant
    })

  return variant
}

export const getRelatedProducts = async (id: Product['id']): Promise<Array<Product>> => {
  const products = getProducts()

  return products.then((data) => data.splice(0, 4))
}
