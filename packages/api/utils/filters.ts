import { FILTER_TYPE, type Filter, type FilterOption, type Product } from '../types'

export const extractBrandFilter = (products: Array<Product>) => {
  const filter = {
    attribute: 'brand',
    type: FILTER_TYPE.RADIO,
    name: 'Marca',
    options: products.reduce((acc, product) => {
      const index = acc.findIndex((option) => option.value === product.brand.slug)
      if (index !== -1) {
        acc[index].count++
        return acc
      }
      const newOption = {
        name: product.brand.name,
        value: product.brand.slug,
        count: 1
      }
      return [...acc, newOption]
    }, [] as Array<FilterOption>)
  }

  return filter
}

export const extractPriceFilter = (products: Array<Product>): Filter => {
  const minPrice = products.reduce((acc, product) => {
    return Math.min(acc, product.price)
  }, Infinity)

  const maxPrice = products.reduce((acc, product) => {
    return Math.max(acc, product.price)
  }, -Infinity)

  const filter = {
    attribute: 'price',
    type: FILTER_TYPE.RANGE,
    name: 'Precio',
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

export const applyFilters = (products: Array<Product>, filters: FiltersType) => {
  const { category: categorySlug, brand, price } = filters

  const brands = brand?.split(',') || []
  const [minPrice, maxPrice] = price?.split(',') || []

  const data = products.filter((product) => {
    if (categorySlug) {
      const categoryFiltered = product.categories.some((category) => category.slug === categorySlug || categorySlug === undefined)
      if (!categoryFiltered) return false
    }

    if (brands.length) {
      const brandFiltered = brands.some((brandSlug: string) => product.brand.slug === brandSlug)
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
