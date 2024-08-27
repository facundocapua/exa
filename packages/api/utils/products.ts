import { Product } from "../types"

export const calculateStock = (product: Product) => {
  return product.variants.reduce((acc, variant) => acc + variant.inventory_quantity, 0)
}