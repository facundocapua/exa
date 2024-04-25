import { cookies } from 'next/headers'
import AccountLoginButton from './account-login-button'
import { CustomerMenu } from './customer-menu'

export const AccountHeader = () => {
  const userToken = cookies().get('auth_jwt')

  if (!userToken) {
    return <AccountLoginButton />
  }

  return (
    <CustomerMenu />
  )
}
