import { OrderReturnRequest } from './types'
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

export const sendOrderReturnRequest = (data: OrderReturnRequest) => {
  const result = fetch(`${getMedusaUrl()}/store/order/return/request`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    next: {
      tags: ['order_return_request']
    }
  })
    .then((res) => res.json())
    .then(data => {
      return data.orderReturnRequest
    })

    return result
}