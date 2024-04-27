import { Customer, Order } from "./types"
import { getMedusaUrl } from "./utils/medusa"

export async function getToken(email: string, password: string): Promise<string>{
  const params = {
    email,
    password
  }
  const token = fetch(`${getMedusaUrl()}/store/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params),
    next: {
      tags: ['auth']
    }
  }).then((res) => res.json())
    .then(data => {
      return data.access_token
    }).catch((err) => {
      console.error(err)
      throw new Error("Wrong email or password.")
    })

  return token
}

export async function getCurrentCustomer(token: string): Promise<Customer> {
  const customer = fetch(`${getMedusaUrl()}/store/auth`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    next: {
      tags: ['customer']
    }
  })
  .then((res) => res.json())
  .then(data => data.customer)
  .catch((err) => {
    console.error(err)
    return null
  })

  return customer
}


export async function getCustomerOrders(token: string): Promise<Order[]> {
  const orders = fetch(`${getMedusaUrl()}/store/customers/me/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    next: {
      tags: ['customer']
    }
  })
  .then((res) => res.json())
  .then(data => data.orders)
  .catch((err) => {
    console.error(err)
    return []
  })

  return orders
}