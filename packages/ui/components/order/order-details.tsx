import type { Order } from 'api'
import { formatDate } from '../../utils/date'

type Props = {
  order: Order
  showStatus?: boolean
}
export default function OrderDetails ({ order, showStatus }: Props) {
  const formatStatus = (str: string) => {
    const formatted = str.split('_').join(' ')

    return formatted.slice(0, 1).toUpperCase() + formatted.slice(1)
  }

  return (
    <div>
      <p>
        Hemos envíado todos los detalles de la orden a{' '}
        <span className="font-semibold">
          {order.email}
        </span>
        .
      </p>
      <p className="mt-2">
        Fecha del pedido: {formatDate(new Date(order.created_at).toISOString())}
      </p>
      <p className="mt-2 text-primary-600 font-semibold text-xl dark:text-primary-400">
        Número de pedido: {order.display_id}
      </p>

      <div className="flex items-center text-compact-small gap-x-4 mt-4">
        {showStatus && (
          <>
            <p>
              Estado del pedido:{' '}
              <span className="text-ui-fg-subtle ">
                {formatStatus(order.fulfillment_status)}
              </span>
            </p>
            <p>
              Estado del pago:{' '}
              <span className="text-ui-fg-subtle ">
                {formatStatus(order.payment_status)}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
