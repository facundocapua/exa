import { useState } from 'react'
import { placeOrder } from '../../actions'
import Button from '../../../generic/button'
import ErrorMessage from '../../../generic/error-message'
import type { CartWithCheckoutStep } from 'api'
import { trackPurchase } from '../../../ga/track-checkout'

export const BanktransferPaymentButton = ({ notReady, cart }: { notReady: boolean, cart: CartWithCheckoutStep }) => {
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
      { /* <p className='text-balance mt-4 text-sm'>Una vez realizado el pedido recibiras las indicaciones para realizar la transferencia.</p> */ }
      <ErrorMessage error={errorMessage} />
    </>
  )
}
