import { Image } from '@medusajs/medusa'
import { getSalonBrands } from './brand'
import type { Collection, Filter, Product, ProductVariant } from './types'
import type { FiltersType } from './utils/filters'
import { applyFilters, applyRestrinctions, extractBrandFilter, extractCategoryFilter, extractPriceFilter } from './utils/filters'
import { getMedusaUrl } from './utils/medusa'

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
      }
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
  ids?: string[]
}

export const getProducts = async ({ category_id, collection_id, brand_id, handle, ids }: Partial<ProductParams> = {}): Promise<Array<Product>> => {
  
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

export const getCollections = async (): Promise<Array<Collection>> => {
  const collections = fetch(
    `${getMedusaUrl()}/store/collections`,
    {
      next: {
        tags: ['collections', 'products']
      }
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.collections
    })

  return collections
}

export const getCollection = async (handle: string): Promise<Collection | undefined> => {
  const collection = getCollections()
    .then((collections) => {
      return collections.find((collection) => collection.handle === handle)
    })

  return collection
}

export const getCollectionProducts = async (handle: string): Promise<Array<Product> | null> => {
  const collection = await getCollection(handle)
  if (!collection) return null

  const data = await getProducts({ collection_id: [collection.id] })

  return data
}

export const getStoreFeaturedProducts = async (storeId: string): Promise<Array<Product>> => {
  const brands = await getSalonBrands(storeId)
  const brandIds = brands.map((brand) => brand.id)

  return getProducts({ brand_id: brandIds })
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
}

type GetCategoryProductsResponse = {
  filters: Array<Filter>
  products: Array<Product>
  total: number
}

export const getFilteredProducts = async ({ filters, restrinctions, exclude = [] }: GetFilteredProductsType): Promise<GetCategoryProductsResponse> => {
  const params = await applyRestrinctions(restrinctions ?? {}) as ProductParams
  const restrictedData = await getProducts(params)

  const filteredData = applyFilters(restrictedData, filters)

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
