import type { CartWithCheckoutStep, PaymentSession } from 'api'
import Button from '../../generic/button'
import { useState } from 'react'
import { placeOrder } from '../actions'

import ErrorMessage from '../../generic/error-message'
import MercadoPagoPaymentButton from './payment-buttons/mercadopago-payment-button'
import { BanktransferPaymentButton } from './payment-buttons/banktransfer-payment-button'
import { trackPurchase } from '../../ga/track-checkout'

type Props = {
  cart: CartWithCheckoutStep
}
export default function PaymentButton ({ cart }: Props) {
  const notReady =
    !!(!cart ||
    !cart.shipping_address ||
    !cart.billing_address ||
    !cart.email ||
    cart.shipping_methods.length < 1)

  const paymentSession = cart.payment_session as PaymentSession

  switch (paymentSession.provider_id) {
    case 'mercadopago':
      return <MercadoPagoPaymentButton cart={cart} session={paymentSession} />
    case 'manual':
      return <ManualTestPaymentButton cart={cart} notReady={notReady} />
    case 'banktransfer':
      return <BanktransferPaymentButton cart={cart} notReady={notReady} />
    default:
      return <Button disabled>Selecciona un método de pago</Button>
  }
}

const ManualTestPaymentButton = ({ notReady, cart }: { notReady: boolean, cart: CartWithCheckoutStep }) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
    trackPurchase(cart)
    await placeOrder().catch((err) => {
      setErrorMessage(err.toString())
      setSubmitting(false)
    })
  }

  const handlePayment = () => {
    setSubmitting(true)

    onPaymentCompleted()
  }

  return (
    <>
      <Button
        disabled={notReady}
        isLoading={submitting}
        onClick={handlePayment}
      >
        Finalizar pedido
      </Button>
      <p className='text-balance mt-4 text-sm'>Una vez realizado el pedido nos pondremos en contacto para coordinar el pago y realizar el énvio.</p>
      <ErrorMessage error={errorMessage} />
    </>
  )
}
