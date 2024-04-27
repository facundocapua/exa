import { cookies } from 'next/headers'
import { getCustomerOrders } from 'api'

export const RecentOrders = async () => {
  const token = cookies().get('auth_jwt')?.value
  if (!token) return null

  const orders = await getCustomerOrders(token)

  return (
    <div>
      <h2 className='text-2xl font-semibold tracking-tight text-neutral-900'>Pedidos recientes</h2>
      {orders.map((order) => (
        <div key={order.id}>
          <h3 className='text-lg font-semibold tracking-tight text-neutral-800'>Pedido {order.id}</h3>
          <p className='text-sm text-neutral-700'>Estado: {order.status}</p>
          <p className='text-sm text-neutral-700'>Total: {order.total}</p>
        </div>
      ))}
    </div>
  )
}

export default RecentOrders
