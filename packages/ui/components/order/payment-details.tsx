import type { MercadoPagoPayment, Order } from 'api'
import { compareAddresses } from '../../utils/address'
import { formatPrice } from '../../server'
import { formatDateTime } from '../../utils/date'
import { paymentInfoMap } from '../generic/constants'
import Divider from '../generic/divider'
import MercadoPagoPaymentDetails from './mercadopago-payment-details'

type Props = {
  order: Order
}
export default function PaymentDetails ({ order }: Props) {
  const sameAsBilling = order?.shipping_address && order?.billing_address ? compareAddresses(order?.shipping_address, order?.billing_address) : true
  const payment = order.payments[0]

  return (
    <section className='mt-8'>
      <h2 className="flex flex-row text-3xl mb-4">
        Pago
      </h2>
      <div className='grid grid-cols-3 gap-4 text-sm'>
        <div>
          <h4 className='font-medium'>Dirección de facturación</h4>
          <div className='opacity-70'>
            {
            sameAsBilling
              ? 'Misma que la de envío'
              : (
                <>
                  <p>{order?.billing_address?.first_name} {order?.billing_address?.last_name}</p>
                  <p>{order?.billing_address?.address_1}</p>
                  <p>{order?.billing_address?.city} - {order?.billing_address?.province}</p>
                  <p>{order?.billing_address?.postal_code}</p>
                </>
                )
          }
          </div>
        </div>
        <div className='col-span-2'>
          <h4 className='font-medium'>Detalle del pago</h4>
          <div className="opacity-70 flex gap-2">
            {payment.provider_id === 'mercadopago'
              ? <MercadoPagoPaymentDetails payment={payment as MercadoPagoPayment} />
              : (
                <>
                  <span className="justify-self-end text-gray-700">
                    {paymentInfoMap[payment.provider_id]?.icon}
                  </span>
                  {`${formatPrice(payment.amount / 100)} pagado el ${formatDateTime(payment.created_at.toString())}`}
                </>
                )}

          </div>
        </div>
      </div>
      <Divider />
    </section>
  )
}
