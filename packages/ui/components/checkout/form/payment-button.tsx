import type { CartWithCheckoutStep, PaymentSession } from 'api'
import Button from '../../generic/button'
import { useState } from 'react'
import { placeOrder } from '../actions'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

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
      return <MercadoPagoPaymentButton />
    case 'manual':
      return <ManualTestPaymentButton notReady={notReady} />
    default:
      return <Button disabled>Selecciona un método de pago</Button>
  }
}

const ManualTestPaymentButton = ({ notReady }: { notReady: boolean }) => {
  const [submitting, setSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const onPaymentCompleted = async () => {
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
      {/* <ErrorMessage error={errorMessage} /> */}
    </>
  )
}

const MercadoPagoPaymentButton = () => {
  initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY ?? '')

  return (
    <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} customization={{ texts: { valueProp: 'smart_option' } }} />
  )
}
