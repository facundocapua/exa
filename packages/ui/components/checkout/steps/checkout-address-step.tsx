'use client'

import type { CartWithCheckoutStep } from 'api'
import ShippingInformation from '../form/shipping-information'
import { setAddresses } from '../actions'
import ContinueButton from './continue-button'
import { useState } from 'react'
import BillingInformation from '../form/billing-information'
import { compareAddresses } from '../../../utils/address'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import AddressInfo from '../form/address-info'
import { useFormState } from 'react-dom'

type Props = {
  cart: CartWithCheckoutStep
}

export default function CheckoutAddressStep ({ cart }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const step = searchParams.get('step') ?? cart.checkout_step
  const isOpen = step === 'address'

  const handleEdit = () => {
    router.push(pathname + '?step=address')
  }

  const [state, formAction] = useFormState(setAddresses, null)
  const [sameAsBilling, setSameAsBilling] = useState(
    cart?.shipping_address && cart?.billing_address
      ? compareAddresses(cart?.shipping_address, cart?.billing_address)
      : true
  )

  return (
    <section className="mt-12 md:mt-4">
      <div className='flex justify-between'>
        <h2 className="font-semibold text-black text-3xl mb-4 flex items-center gap-2">
          Dirección de envío
          {!isOpen && <CheckCircleIcon className='w-5 h-5' />}
        </h2>
        {!isOpen && <button onClick={handleEdit} className='text-primary-600 text-sm'>Editar</button>}
      </div>
      {
        isOpen
          ? (
            <form action={formAction}>
              <ShippingInformation cart={cart} sameAsBilling={sameAsBilling} onSameAsBillingChange={setSameAsBilling} />

              {!sameAsBilling && (
              <div className="mt-6">
                <h2 className='font-semibold text-black text-3xl mb-4'>Dirección de facturación</h2>
                <BillingInformation cart={cart} />
              </div>
              )}

              {state?.error && <div className="alert alert-danger mt-4">{state.error}</div>}

              <ContinueButton>Continuar con el envio</ContinueButton>
            </form>
            )
          : (<AddressInfo cart={cart} />)
      }

    </section>
  )
}
