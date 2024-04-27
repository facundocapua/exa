import AccountLoginButton from './account-login-button'
import { CustomerMenu } from './customer-menu'
import { getLoginCustomer } from './utils'

export const AccountHeader = async () => {
  const customer = await getLoginCustomer()
  if (!customer) {
    return <AccountLoginButton />
  }

  return (
    <CustomerMenu />
  )
}
