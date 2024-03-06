import { getProductBySku } from './product'
import type { Cart } from './types'

export const getCart = async (data: Record<string, number>): Promise<Cart> => {
  let totalQuantity = 0
  let subtotal = 0
  let discount = 0
  const items = await Promise.all(Object.entries(data).map(async ([sku, qty]) => {
    const product = await getProductBySku(sku)
    if (!product) throw new Error(`Product ${sku} not found`)

    const price = product ? product.price * qty : 0
    const salePrice = product ? product.salePrice * qty : 0
    totalQuantity += qty
    subtotal += price
    discount += (price - salePrice)

    return {
      sku,
      qty,
      price,
      salePrice,
      product
    }
  }))

  return {
    id: '1',
    lines: items,
    cost: {
      subtotal,
      discount,
      shipping: 0,
      total: subtotal - discount
    },
    totalQuantity
  }
}
