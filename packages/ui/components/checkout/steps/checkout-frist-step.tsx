'use client'
import { Cart } from 'api'
import ShippingInformation from '../form/ShippingInformation'
import { useFormState, useFormStatus } from 'react-dom'
import { setAddresses } from '../actions'

type Props = {
  cart: Cart
}

export default function CheckoutFirstStep ({ cart }: Props) {
  const [state, formAction] = useFormState(setAddresses, null)
  const { pending } = useFormStatus()

  return (
    <section className="mt-12">
      <h2 className='font-semibold text-black text-4xl mb-2'>Dirección de envío</h2>
      <form action={formAction}>
        <ShippingInformation cart={cart} />
        {state?.error && <div className="alert alert-danger mt-4">{state.error}</div>}
        <button type="submit" className="btn btn-primary mt-4" aria-disabled={pending}>Continuar</button>
      </form>

    </section>
  )
}
