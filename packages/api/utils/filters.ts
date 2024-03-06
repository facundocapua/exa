import { getBrands } from '../brand'
import { getCategories } from '../category'
import { FILTER_TYPE, type Filter, type FilterOption, type Product } from '../types'

export const extractCategoryFilter = (products: Array<Product>) => {
  const options: Record<string, FilterOption> = {}
  products.forEach(product => {
    product.categories.forEach(category => {
      options[category.handle] ??= {
        name: category.name,
        value: category.handle,
        count: 0
      }
      options[category.handle].count++
    })
  })

  const filter = {
    attribute: 'category',
    type: FILTER_TYPE.RADIO,
    name: 'Categoria',
    options: Object.values(options)
  }

  return filter
}

export const extractBrandFilter = (products: Array<Product>) => {
  const filter = {
    attribute: 'brand',
    type: FILTER_TYPE.RADIO,
    name: 'Marca',
    options: products.reduce((acc, product) => {
      const index = acc.findIndex((option) => option.value === product.brand.handle)
      if (index !== -1) {
        acc[index].count++
        return acc
      }
      const newOption = {
        name: product.brand.name,
        value: product.brand.handle,
        count: 1
      }
      return [...acc, newOption]
    }, [] as Array<FilterOption>)
  }

  return filter
}

export const extractPriceFilter = (products: Array<Product>): Filter => {
  const minPrice = products.reduce((acc, product) => {
    if (!product.salePrice) return acc
    return Math.min(acc, product.salePrice)
  }, Infinity)

  const maxPrice = products.reduce((acc, product) => {
    if (!product.salePrice) return acc

    return Math.max(acc, product.salePrice)
  }, -Infinity)

  const filter = {
    attribute: 'price',
    type: FILTER_TYPE.RANGE,
    name: 'Precio',
    format: 'currency',
    options: [
      {
        name: minPrice.toString(),
        value: minPrice,
        count: 1
      },
      {
        name: maxPrice.toString(),
        value: maxPrice,
        count: 1
      }
    ]
  }

  return filter
}

export type FiltersType = {
  category?: string
  brand?: string
  price?: string
}

export const applyRestrinctions = async (filters: FiltersType) => {
  const { category, brand } = filters

  const categoryHandles = category?.split(',') || []
  const brandHandles = brand?.split(',') || []

  const restrictions: Record<string, string[]> = {}

  if (categoryHandles.length) {
    const categories = await getCategories()
    const categoryIds = categories
      .filter((category) => categoryHandles.includes(category.handle))
      .map((category) => category.id)
    console.log(categoryIds)
    restrictions.category_id = categoryIds
  }

  if (brandHandles.length) {
    const brands = await getBrands()
    const categoryIds = brands
      .filter((brands) => brandHandles.includes(brands.handle))
      .map((brands) => brands.id)

    restrictions.brand_id = categoryIds
  }

  return restrictions
}

export const applyFilters = (products: Array<Product>, filters: FiltersType) => {
  const { category, brand, price } = filters

  const categories = category?.split(',') || []
  const brands = brand?.split(',') || []
  const [minPrice, maxPrice] = price?.split('-') || []

  const data = products.filter((product) => {
    if (categories.length) {
      const categoryFiltered = product.categories?.some((category) => categories.includes(category.handle))
      if (!categoryFiltered) return false
    }

    if (brands.length) {
      const brandFiltered = brands.some((brandHandle: string) => product.brand.handle === brandHandle)
      if (!brandFiltered) return false
    }

    if (minPrice && maxPrice) {
      const priceFiltered = product.salePrice >= Number(minPrice) && product.salePrice <= Number(maxPrice)
      if (!priceFiltered) return false
    }

    return true
  })

  return data
}
