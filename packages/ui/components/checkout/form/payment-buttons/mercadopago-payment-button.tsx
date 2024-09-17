import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import type { PaymentSession } from 'api'
import { useState } from 'react'
import ErrorMessage from '../../../generic/error-message'
import { placeOrder } from '../../actions'

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY ?? '')

export const MercadoPagoPaymentButton = ({ session }: {session: PaymentSession}) => {
  const { data } = session
  const { preferenceId } = data as { preferenceId: string}
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handlePayment = async () => {
    await placeOrder()
      .catch((err) => { setErrorMessage(err.toString()) })

    return preferenceId
  }

  return (
    <>
      <Wallet
        // initialization={{ preferenceId }}
        customization={{ texts: { valueProp: 'smart_option' } }}
        onSubmit={handlePayment}
      />
      <ErrorMessage error={errorMessage} />
    </>
  )
}

export default MercadoPagoPaymentButton
