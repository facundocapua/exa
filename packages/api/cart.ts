import type { StoreCompleteCartRes, StorePostCartsCartReq } from '@medusajs/medusa'
import type { Cart, CartItem, ShippingMethod } from './types'
import { getMedusaRegionId, getMedusaSalesChannelId, getMedusaUrl } from './utils/medusa'
import { getProducts } from './product'
import omit from 'just-omit'

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
    return res.json()
  })
    .then(data => {
      console.log(data)
      return data.cart
    })

  return cart
}

export async function listShippingMethodsForCart (cartId: string): Promise<ShippingMethod[]> {
  const methods = fetch(`${getMedusaUrl()}/store/shipping-options/${cartId}`, {
    next: {
      tags: ['cart']
    }
  }).then((res) => res.json())
    .then(data => {
      return data.shipping_options
    })

  return methods
}

export async function addShippingMethod (cartId: string, shippingMethodId: string): Promise<Cart> {
  const cart = fetch(`${getMedusaUrl()}/store/carts/${cartId}/shipping-methods`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option_id: shippingMethodId }),
    next: {
      tags: ['cart']
    }
  }).then((res) => res.json())
    .then(data => {
      return data.cart
    })

  return cart
}

export async function createPaymentSession (cartId: string): Promise<Cart> {
  const cart = fetch(`${getMedusaUrl()}/store/carts/${cartId}/payment-sessions`, {
    method: 'POST',
    next: {
      tags: ['cart']
    }
  }).then((res) => res.json())
    .then(data => {
      return data.cart
    })

  return cart
}

export async function setPaymentSession (cartId: string, providerId: string): Promise<Cart> {
  const cart = fetch(`${getMedusaUrl()}/store/carts/${cartId}/payment-session`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ provider_id: providerId }),
    next: {
      tags: ['cart']
    }
  }).then((res) => res.json())
    .then(data => {
      console.log(data, providerId)
      return data.cart
    })

  return cart
}

export async function completeCart (cartId: string): Promise<StoreCompleteCartRes> {
  const cart = fetch(`${getMedusaUrl()}/store/carts/${cartId}/complete`, {
    method: 'POST',
    next: {
      tags: ['cart']
    }
  }).then((res) => res.json())

  return cart
}

export async function enrichLineItems (
  lineItems: CartItem[],
  regionId: string
): Promise<
  | Omit<CartItem, 'beforeInsert' | 'beforeUpdate' | 'afterUpdateOrLoad'>[]
  | undefined
> {
  // Prepare query parameters
  const queryParams = {
    ids: lineItems.map((lineItem) => lineItem.variant.product_id),
    regionId
  }

  // Fetch products by their IDs
  const products = await getProducts(queryParams)

  // If there are no line items or products, return an empty array
  if (!lineItems?.length || !products) {
    return []
  }

  // Enrich line items with product and variant information

  const enrichedItems = lineItems.map((item) => {
    const product = products.find((p) => p.id === item.variant.product_id)
    const variant = product?.variants.find((v) => v.id === item.variant_id)

    // If product or variant is not found, return the original item
    if (!product || !variant) {
      return item
    }

    // If product and variant are found, enrich the item
    return {
      ...item,
      variant: {
        ...variant,
        product: omit(product, 'variants')
      }
    }
  }) as CartItem[]

  return enrichedItems
}
