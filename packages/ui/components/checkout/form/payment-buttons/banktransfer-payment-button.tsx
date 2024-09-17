import { useState } from 'react'
import { placeOrder } from '../../actions'
import Button from '../../../generic/button'
import ErrorMessage from '../../../generic/error-message'

export const BanktransferPaymentButton = ({ notReady }: { notReady: boolean }) => {
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
      { /* <p className='text-balance mt-4 text-sm'>Una vez realizado el pedido recibiras las indicaciones para realizar la transferencia.</p> */ }
      <ErrorMessage error={errorMessage} />
    </>
  )
}
