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

  return (
    <div className="mt-6">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        <div className="col-span-full">
          <CheckoutAddressStep cart={cart} />

          <CheckoutDevliveryStep cart={cart} availableShippingMethods={availableShippingMethods} />

          <CheckoutPaymentStep cart={cart} />

          <CheckoutReviewStep cart={cart} />
        </div>
      </div>
    </div>
  )
}
