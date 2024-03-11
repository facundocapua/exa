import { getProductVariant } from './product'
import type { Cart } from './types'

export const getCart = async (data: Record<string, number>): Promise<Cart> => {
  let totalQuantity = 0
  let subtotal = 0
  let discount = 0
  const items = await Promise.all(Object.entries(data).map(async ([variantId, qty]) => {
    const variant = await getProductVariant(variantId)
    if (!variant) throw new Error(`Product ${variantId} not found`)

    const price = variant ? variant.original_price * qty : 0
    const salePrice = variant ? variant.calculated_price * qty : 0
    totalQuantity += qty
    subtotal += price
    discount += (price - salePrice)

    return {
      variantId,
      qty,
      price,
      salePrice,
      variant
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
