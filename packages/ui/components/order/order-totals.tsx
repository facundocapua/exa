import type { Cart, Order } from 'api'
import { formatPrice } from '../../server'
import Divider from '../generic/divider'

type Props = {
  order: Order | Cart
}

export default function OrderTotals ({ order }: Props) {
  return (
    <>
      <Divider />
      <div className='flex flex-col gap-y-2'>
        <div className="flex justify-between gap-x-6 ">
          <div className="flex min-w-0 gap-x-4">
            <p className="text-sm leading-6 text-neutral-800 dark:text-neutral-200">Subtotal</p>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-base leading-6 text-neutral-800 dark:text-neutral-200">{formatPrice(Number(order.subtotal) / 100)}</p>
          </div>
        </div>
        <div className="flex justify-between gap-x-6 ">
          <div className="flex min-w-0 gap-x-4">
            <p className="text-sm leading-6 text-neutral-800 dark:text-neutral-200">Envío</p>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <p className="text-base leading-6 text-neutral-800 dark:text-neutral-200">{formatPrice(Number(order.shipping_total) / 100)}</p>
          </div>
        </div>
        {
          Number(order.discount_total) > 0 &&
          <div className="flex justify-between gap-x-6 ">
            <div className="flex min-w-0 gap-x-4">
              <p className="text-sm leading-6 text-neutral-800 dark:text-neutral-200">Descuento</p>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-base leading-6 text-neutral-800 dark:text-neutral-200">{formatPrice(Number(order.discount_total) / 100)}</p>
            </div>
          </div>
        }
        {
          Number(order.tax_total) > 0 &&
          <div className="flex justify-between gap-x-6 ">
            <div className="flex min-w-0 gap-x-4">
              <p className="text-sm leading-6 text-neutral-800 dark:text-neutral-200">Impuestos</p>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-base leading-6 text-neutral-800 dark:text-neutral-200">{formatPrice(Number(order.tax_total) / 100)}</p>
            </div>
          </div>
        }
      </div>
      <Divider />
      <div className="flex justify-between gap-x-6 ">
        <div className="flex min-w-0 gap-x-4">
          <p className="text-sm text leading-6 text-black dark:text-neutral-100">Total</p>
        </div>
        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p className="text-lg font-medium leading-6 text-black dark:text-neutral-100">{formatPrice(Number(order.total) / 100)}</p>
        </div>
      </div>
      <Divider />
    </>
  )
}
