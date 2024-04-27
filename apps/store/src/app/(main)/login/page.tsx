import { redirect } from 'next/navigation'
import { LoginForm } from 'ui/components/customer/login-form'
import { getLoginCustomer } from 'ui/components/customer/utils'

export default async function LoginPage () {
  const customer = await getLoginCustomer()
  if (customer) {
    return redirect('/account')
  }

  return (
    <>
      <h1>Login page</h1>
      <LoginForm />
    </>
  )
}
