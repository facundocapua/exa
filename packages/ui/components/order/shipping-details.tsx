import type { Cart, Order } from 'api'
import { formatPrice } from '../../server'
import Divider from '../generic/divider'

type Props = {
  order: Order | Cart
}

export default function ShippingDetails ({ order }: Props) {
  return (
    <section className='mt-8'>
      <h2 className="flex flex-row text-3xl mb-4">
        Envío
      </h2>
      <div className='grid grid-cols-3 gap-4 text-sm'>
        <div>
          <h4 className='font-medium'>Dirección de envío</h4>
          <div className='opacity-70'>
            <p>{order?.shipping_address?.first_name} {order?.shipping_address?.last_name}</p>
            <p>{order?.shipping_address?.address_1}</p>
            <p>{order?.shipping_address?.city} - {order?.shipping_address?.province}</p>
            <p>{order?.shipping_address?.postal_code}</p>
          </div>
        </div>
        <div>
          <h4 className='font-medium'>Contacto</h4>
          <div className='opacity-70'>
            <p>{order?.shipping_address?.phone}</p>
            <p>{order.email}</p>
          </div>
        </div>
        <div>
          <h4 className='font-medium'>Método de envío</h4>
          <p className="opacity-70">
            {order.shipping_methods[0].shipping_option.name} (
            {formatPrice(order.shipping_methods[0].price / 100)
              .replace(/,/g, '')
              .replace(/\./g, ',')}
            )
          </p>
        </div>
      </div>
      <Divider />
    </section>
  )
}
