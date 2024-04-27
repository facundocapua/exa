import { getLoginCustomer } from 'ui/components/customer/utils'
import { RecentOrders } from 'ui/components/customer/account/recent-orders'

export default async function AccountDashboard () {
  const customer = await getLoginCustomer()

  return (
    <div>
      <header className='flex justify-between items-center border-b border-neutral-300 pb-4'>
        <h1 className="text-3xl font-semibold tracking-tight text-neuborder-neutral-900">Hola {customer?.first_name}</h1>
        <p className='text-sm'>Indentificado como <span className='font-semibold'>{customer?.email}</span></p>
      </header>

      <RecentOrders />
    </div>
  )
}
