import { getMedusaUrl } from './utils/medusa'

export const retrieveOrder = (orderId: string) => {
  const data = fetch(`${getMedusaUrl()}/store/orders/${orderId}`)
    .then((res) => res.json())
    .then(data => {
      return data.order
    })

  return data
}

export const retrieveOrderByCartId = (cartId: string) => {
  const data = fetch(`${getMedusaUrl()}/store/orders/cart/${cartId}`)
    .then((res) => res.json())
    .then(data => {
      return data.order
    })

  return data
}
