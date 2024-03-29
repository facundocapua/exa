import { getMedusaUrl } from './utils/medusa'

export const retrieveOrder = (orderId: string) => {
  const data = fetch(`${getMedusaUrl()}/store/orders/${orderId}`)
    .then((res) => res.json())
    .then(data => {
      return data.order
    })

  return data
}
