import type { Cart } from 'api'
// import OrderDetails from './order-details'
import OrderItems from './order-items'
import OrderTotals from './order-totals'
import ShippingDetails from './shipping-details'
// import PaymentDetails from './payment-details'

type Props = {
  cart: Cart
}

export default function CartCompleted ({ cart }: Props) {
  return (
    <div className="py-6 min-h-[calc(100vh-64px)]">
      <div className="flex flex-col justify-center items-center gap-y-10 h-full w-full">
        <div className="flex flex-col gap-4 max-w-4xl h-full bg-white w-full py-10 dark:bg-black">
          <h1 className="flex flex-col gap-y-3 text-3xl mb-4">
            <span>¡Gracias!</span>
            <span>Tu pedido se ha completado con éxito.</span>
          </h1>
          {/* <OrderDetails order={order} /> */}
          <OrderItems items={cart.items} />
          <OrderTotals order={cart} />
          <ShippingDetails order={cart} />
          {/* <PaymentDetails order={order} /> */}
          {/* <Help /> */}
        </div>
      </div>
    </div>
  )
}
