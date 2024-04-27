import { getLoginCustomer } from 'ui/components/customer/utils'
import { LoginModal } from 'ui/components/customer/login-modal'

export default async function ModalLoginPage () {
  const customer = await getLoginCustomer()

  return (
    <LoginModal customer={customer} />
  )
}
