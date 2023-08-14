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
