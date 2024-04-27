import { getCurrentCustomer } from 'api'
import { cookies } from 'next/headers'

export const getLoginCustomer = async () => {
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
