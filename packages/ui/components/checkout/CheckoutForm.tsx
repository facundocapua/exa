// import ContactInformation from './form/ContactInformation'
import { Cart } from 'api'
import CheckoutFirstStep from './steps/checkout-frist-step'

type Props = {
  cart: Cart
}

export default function CheckoutForm ({ cart }: Props) {
  return (
    <div className="mt-6">
      <div className="grid grid-cols-12 gap-x-4 gap-y-6">
        <div className="col-span-full">
          <CheckoutFirstStep cart={cart} />
        </div>
      </div>
    </div>
  )
}
