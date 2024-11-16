import type { CartWithCheckoutStep } from 'api'
import { useEffect } from 'react'
import { trackBeginCheckout } from '../../ga/track-checkout'

type Props = {
  cart: CartWithCheckoutStep
}
export default function BeginCheckout ({ cart }: Props) {
  useEffect(() => {
    trackBeginCheckout(cart)
  }, [])
  return <></>
}
