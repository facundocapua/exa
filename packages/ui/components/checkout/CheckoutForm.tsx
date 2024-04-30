import type { CartWithCheckoutStep } from 'api'
import { listShippingMethodsForCart } from 'api'
import CheckoutAddressStep from './steps/checkout-address-step'
import CheckoutDevliveryStep from './steps/checkout-delivery-step'
import CheckoutPaymentStep from './steps/checkout-payment-step'
import CheckoutReviewStep from './steps/checkout-review-step'

type Props = {
  cart: CartWithCheckoutStep
}

export default async function CheckoutForm ({ cart }: Props) {
  const availableShippingMethods = await listShippingMethodsForCart(
    cart.id
  ).then((methods) => methods?.filter((m) => !m.is_return))

  if (!availableShippingMethods) {
    return null
  }

  const uniquePayment = cart?.payment_sessions?.length === 1

  return (
    <div className="md:mt-6">
      <CheckoutAddressStep cart={cart} />

      <CheckoutDevliveryStep cart={cart} availableShippingMethods={availableShippingMethods} />

      {!uniquePayment ? (<CheckoutPaymentStep cart={cart} />) : null}

      <CheckoutReviewStep cart={cart} title={uniquePayment ? 'Pago' : 'Revisar pedido'} />
    </div>
  )
}
