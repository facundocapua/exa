import type { CartWithCheckoutStep } from 'api'
import { listShippingMethodsForCart } from 'api'
import CheckoutAddressStep from './steps/checkout-address-step'
import CheckoutDevliveryStep from './steps/checkout-delivery-step'
import CheckoutPaymentStep from './steps/checkout-payment-step'
import CheckoutReviewStep from './steps/checkout-review-step'

type Props = {
  cart: CartWithCheckoutStep
}

const getAvailableShippingMethods = async (cart: CartWithCheckoutStep) => {
  const availableShippingMethods = await listShippingMethodsForCart(cart.id)
    .then((methods) => methods?.filter((m) => !m.is_return))

  const shippingPostalCode = cart?.shipping_address?.postal_code
  if (!shippingPostalCode) return availableShippingMethods

  const freeShipping = availableShippingMethods?.find((method) => method?.price_incl_tax === 0)
  if (freeShipping) return [freeShipping]

  const filteredShippingMethods = availableShippingMethods?.filter((method) => {
    if (!method?.metadata?.postal_code) return false
    return method?.metadata?.postal_code === shippingPostalCode
  })

  const globalShippingMethods = availableShippingMethods?.filter((method) => !method?.metadata?.postal_code)

  return filteredShippingMethods?.length > 0 ? filteredShippingMethods : globalShippingMethods
}

export default async function CheckoutForm ({ cart }: Props) {
  const availableShippingMethods = await getAvailableShippingMethods(cart)

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
