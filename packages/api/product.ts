import type { Filter, Product } from './types'
import type { FiltersType } from './utils/filters'
import { applyFilters, applyRestrinctions, extractBrandFilter, extractCategoryFilter, extractPriceFilter } from './utils/filters'
import { initClient } from './utils/supabase'

export const getProducts = async (): Promise<Array<Product>> => {
  const client = initClient()
  const { data } = await client
    .from('products')
    .select('*, images: products_images(image), brand(*), categories(*)')
    .returns<Array<Product>>()

  if(!data?.length) return []

  return data
}

export const getFeaturedProducts = async (): Promise<Array<Product>> => {
  const data = await getProducts()

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
  restrinctions: FiltersType
  exclude?: Array<string>
}

type GetCategoryProductsResponse = {
  filters: Array<Filter>
  products: Array<Product>
  total: number
}

export const getFilteredProducts = async ({ filters, restrinctions, exclude = [] }: GetFilteredProductsType): Promise<GetCategoryProductsResponse> => {
  const client = initClient()
  const query = client
    .from('products')
    .select('*, images: products_images(image), brand!inner(*), categories!inner(*)')
    .eq('is_active', true)
  

  const {data: restrictedData} = await applyRestrinctions(query, restrinctions)
  const filteredData = applyFilters(restrictedData, filters)

  return new Promise((resolve) => {
    resolve({
      products: filteredData,
      filters: getFiltersFromProducts(restrictedData, exclude),
      total: restrictedData.length
    })
  })
}

export const getProduct = async (slug: string): Promise<Product | null> => {
  const client = initClient()
  const { data } = await client
    .from('products')
    .select('*, images: products_images(image), brand(*), categories(*), variants: products_variants(*)')
    .eq('is_active', true)
    .eq('slug', slug)
    .returns<Product>()
    .single()

  return data
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
  const {data: relatedData} = await client
    .from('products_related')
    .select('from!inner(*), to(*)')
    .eq('from.sku', sku)
  
  if(!relatedData?.length) return []
  
  const skus = relatedData.map(
    (data) => {
      const {to} = data as {to: Partial<Product>, from: Partial<Product>}
      return to.sku
    })

  const {data} = await client
    .from('products')
    .select('*, images: products_images(image), brand(*), categories(*)')
    .eq('is_active', true)
    .in('sku', skus)
    .returns<Array<Product>>()

  if(!data?.length) return []

  return data
}
