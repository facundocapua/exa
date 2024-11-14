import type { Product } from 'api'

export const extractProductInfo = (product: Product) => {
  const data: Record<string, string|number> = {
    item_id: product.handle!,
    item_name: product.title,
    item_brand: product.brand.name,
    price: product.salePrice,
    quantity: 1
  }

  product.categories.forEach((category, index) => {
    const key = index === 0 ? 'item_category' : `item_category${index + 1}`
    data[key] = category.name
  })

  return data
}
