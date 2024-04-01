import type { CartWithCheckoutStep, PaymentSession } from 'api'
import Button from '../../generic/button'
import { useState } from 'react'
import { placeOrder } from '../actions'

import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import ErrorMessage from '../../generic/error-message'

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
      return <MercadoPagoPaymentButton session={paymentSession} />
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
      <ErrorMessage error={errorMessage} />
    </>
  )
}

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY ?? '')

const MercadoPagoPaymentButton = ({ session }: {session: PaymentSession}) => {
  const { data } = session
  const { preferenceId } = data as { preferenceId: string}
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handlePayment = () => {
    return placeOrder({ noRedirect: true })
      .then(() => {
        return preferenceId
      })
      .catch((err) => {
        setErrorMessage(err.toString())
      })
  }

  return (
    <>
      <Wallet
        initialization={{ preferenceId }}
        customization={{ texts: { valueProp: 'smart_option' } }}
        // onSubmit={handlePayment}
      />
      <ErrorMessage error={errorMessage} />
    </>
  )
}
