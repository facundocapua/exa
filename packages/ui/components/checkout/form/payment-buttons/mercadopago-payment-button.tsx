import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import type { CartWithCheckoutStep, PaymentSession } from 'api'
import { useState } from 'react'
import ErrorMessage from '../../../generic/error-message'
import { placeOrder } from '../../actions'
import { trackPurchase } from '../../../ga/track-checkout'
import { IWalletBrickDefaultCustomization } from '@mercadopago/sdk-react/esm/bricks/wallet/types'

initMercadoPago(process.env.NEXT_PUBLIC_MERCADOPAGO_PUBLIC_KEY ?? '')

export const MercadoPagoPaymentButton = ({ session, cart }: {session: PaymentSession, cart: CartWithCheckoutStep}) => {
  const { data } = session
  const { preferenceId } = data as { preferenceId: string}
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const handlePayment = async () => {
    trackPurchase(cart)
    await placeOrder()
      .catch((err) => { setErrorMessage(err.toString()) })

    return preferenceId
  }

  const customization: IWalletBrickDefaultCustomization = {
    valueProp: 'convenience_all'
  }

  return (
    <>
      <Wallet
        customization={customization}
        onSubmit={handlePayment}
      />
      <ErrorMessage error={errorMessage} />
    </>
  )
}

export default MercadoPagoPaymentButton
