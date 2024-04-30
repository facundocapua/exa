import type { Customer } from 'api'
import { getCurrentCustomer } from 'api'
import { cookies } from 'next/headers'

export const getLoginCustomer = async (): Promise<Customer | null> => {
  const userToken = cookies().get('auth_jwt')?.value

  if (!userToken) {
    return null
  }

  const customer = await getCurrentCustomer(userToken)
  if (!customer) {
    return null
  }

  return customer
}
