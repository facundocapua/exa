import type { Cart } from './types'
import { getMedusaRegionId, getMedusaSalesChannelId, getMedusaUrl } from './utils/medusa'

export const createCart = async (): Promise<Cart> => {
  const params = {
    region_id: getMedusaRegionId(),
    sales_channel_id: getMedusaSalesChannelId()
  }
  const cart = fetch(`${getMedusaUrl()}/store/carts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((res) => res.json())
    .then(data => {
      return data.cart
    })

  return cart
}

export const getCart = async (id: string): Promise<Cart> => {
  const cart = fetch(`${getMedusaUrl()}/store/carts/${id}`)
    .then((res) => res.json())
    .then(data => {
      return data.cart
    })

  return cart
}

export const addCartItem = async (cartId: string, variantId: string, quantity: number): Promise<Cart> => {
  const params = {
    variant_id: variantId,
    quantity
  }

  const cart = fetch(`${getMedusaUrl()}/store/carts/${cartId}/line-items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((res) => res.json())
    .then(data => {
      return data.cart
    })

  return cart
}

export const removeCartItem = async (cartId: string, lineItemId: string): Promise<Cart> => {
  const cart = fetch(`${getMedusaUrl()}/store/carts/${cartId}/line-items/${lineItemId}`, {
    method: 'DELETE'
  }).then((res) => res.json())
    .then(data => {
      return data.cart
    })

  return cart
}

export const updateCartItem = async (cartId: string, lineItemId: string, quantity: number): Promise<Cart> => {
  const params = {
    quantity
  }

  const cart = fetch(`${getMedusaUrl()}/store/carts/${cartId}/line-items/${lineItemId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then((res) => res.json())
    .then(data => {
      return data.cart
    })

  return cart
}

// export const getCart = async (data: Record<string, number>): Promise<Cart> => {
//   let totalQuantity = 0
//   let subtotal = 0
//   let discount = 0
//   const items = await Promise.all(Object.entries(data).map(async ([variantId, qty]) => {
//     const variant = await getProductVariant(variantId)
//     if (!variant) throw new Error(`Product ${variantId} not found`)

//     const price = variant ? variant.original_price * qty : 0
//     const salePrice = variant ? variant.calculated_price * qty : 0
//     totalQuantity += qty
//     subtotal += price
//     discount += (price - salePrice)

//     return {
//       variantId,
//       qty,
//       price,
//       salePrice,
//       variant
//     }
//   }))

//   return {
//     id: '1',
//     lines: items,
//     cost: {
//       subtotal,
//       discount,
//       shipping: 0,
//       total: subtotal - discount
//     },
//     totalQuantity
//   }
// }
