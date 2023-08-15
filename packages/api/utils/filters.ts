import { FILTER_TYPE, type Filter, type FilterOption, type Product } from '../types'

export const extractCategoryFilter = (products: Array<Product>) => {
  const options: Record<string, FilterOption> = {}
  products.forEach(product => {
    product.categories.forEach(category => {
      options[category.slug] ??= {
        name: category.name,
        value: category.slug,
        count: 0
      }
      options[category.slug].count++
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
  const { category, brand, price } = filters

  const categories = category?.split(',') || []
  const brands = brand?.split(',') || []
  const [minPrice, maxPrice] = price?.split(',') || []

  const data = products.filter((product) => {
    if (categories.length) {
      const categoryFiltered = product.categories.some((category) => categories.includes(category.slug))
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
