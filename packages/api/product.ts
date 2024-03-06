import { getStoreBrands } from './brand'
import type { Filter, Product, ProductVariant } from './types'
import type { FiltersType } from './utils/filters'
import { applyFilters, applyRestrinctions, extractBrandFilter, extractCategoryFilter, extractPriceFilter } from './utils/filters'
import { initClient } from './utils/supabase'
import { getMedusaUrl } from './utils/medusa'

export const getProductVariants = async (variantIds: string[]): Promise<Array<ProductVariant>> => {
  const params = new URLSearchParams({
    expand: 'prices',
    ids: variantIds.join(','),
    currency_code: 'ars'

  })
  const products = fetch(`${getMedusaUrl()}/store/variants?${params.toString()}`)
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
  brand_id?: string[]
  handle?: string
}

export const getProducts = async ({ category_id, brand_id, handle }: Partial<ProductParams> = {}): Promise<Array<Product>> => {
  const params = new URLSearchParams({
    expand: 'categories,images,variants,brand',
    currency_code: 'ars'
  })

  if (category_id) {
    for (const catId of category_id) {
      params.append('category_id[]', catId)
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

  const products: Array<Product> = await fetch(`${getMedusaUrl()}/store/products?${params.toString()}`)
    .then((res) => res.json())
    .then(data => {
      return data.products
    })

  const variantsIds = products.map((product) => product.variants.map((variant) => variant.id)).flat()
  const variants = await getProductVariants(variantsIds)

  products.forEach((product) => {
    product.variants = variants.filter((variant) => product.id === variant.product_id)
    product.price = product.variants[0].original_price
    product.salePrice = product.variants[0]?.calculated_price

    product.variants.forEach((variant: ProductVariant) => {
      if (variant?.metadata?.image) {
        const imageIndex = product.images.findIndex((image) => image.url === variant?.metadata?.image)
        if (imageIndex > -1) {
          variant.images = [product.images[imageIndex]]
          product.images.splice(imageIndex, 1)
        }
      }
    })
  })

  return products
}

export const getFeaturedProducts = async (): Promise<Array<Product>> => {
  const data = await getProducts()

  return data
}

export const getStoreFeaturedProducts = async (storeId: string): Promise<Array<Product>> => {
  const client = initClient()

  const brands = await getStoreBrands(storeId)
  const brandIds = brands.map((brand) => brand.id)

  const { data } = await client
    .from('products')
    .select('*, images: products_images(image), brand!inner(*), categories(*)')
    .in('brand.id', brandIds)
    .returns<Array<Product>>()

  if (!data?.length) return []

  return data
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
    if (priceFilter.options[0].value !== priceFilter.options[1].value) {
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
  console.log('params', params)
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

export const getProductBySku = async (sku: Product['sku']): Promise<Product | null> => {
  const client = initClient()
  const { data } = await client
    .from('products')
    .select('*, images: products_images(image), brand(*), categories(*)')
    .eq('is_active', true)
    .eq('sku', sku)
    .returns<Product>()
    .single()

  return data
}

export const getRelatedProducts = async (sku: Product['sku']): Promise<Array<Product>> => {
  const client = initClient()
  const { data: relatedData } = await client
    .from('products_related')
    .select('from!inner(*), to(*)')
    .eq('from.sku', sku)

  if (!relatedData?.length) return []

  const skus = relatedData.map(
    (data) => {
      const { to } = data as {to: Partial<Product>, from: Partial<Product>}
      return to.sku
    })

  const { data } = await client
    .from('products')
    .select('*, images: products_images(image), brand(*), categories(*)')
    .eq('is_active', true)
    .in('sku', skus)
    .returns<Array<Product>>()

  if (!data?.length) return []

  return data
}
