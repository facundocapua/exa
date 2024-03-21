import { StorePostCartsCartReq } from '@medusajs/medusa'
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
    body: JSON.stringify(params),
    next: {
      tags: ['cart']
    }
  }).then((res) => res.json())
    .then(data => {
      return data.cart
    })

  return cart
}

export const getCart = async (id: string): Promise<Cart> => {
  const cart = fetch(`${getMedusaUrl()}/store/carts/${id}`, {
    next: {
      tags: ['cart']
    }
  }).then((res) => res.json())
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
    body: JSON.stringify(params),
    next: {
      tags: ['cart']
    }
  }).then((res) => res.json())
    .then(data => {
      return data.cart
    })

  return cart
}

export const removeCartItem = async (cartId: string, lineItemId: string): Promise<Cart> => {
  const cart = fetch(`${getMedusaUrl()}/store/carts/${cartId}/line-items/${lineItemId}`, {
    method: 'DELETE',
    next: {
      tags: ['cart']
    }
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
    body: JSON.stringify(params),
    next: {
      tags: ['cart']
    }
  }).then((res) => res.json())
    .then(data => {
      return data.cart
    })

  return cart
}

export async function updateCart (cartId: string, data: StorePostCartsCartReq): Promise<Cart> {
  const cart = fetch(`${getMedusaUrl()}/store/carts/${cartId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    next: {
      tags: ['cart']
    }
  }).then((res) => {
    console.log(res)
    return res.json()
  })
    .then(data => {
      console.log(data)
      return data.cart
    })

  return cart
}
