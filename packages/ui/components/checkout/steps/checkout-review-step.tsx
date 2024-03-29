'use client'

import { CheckCircleIcon } from '@heroicons/react/24/solid'
import type { CartWithCheckoutStep } from 'api'
import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import PaymentButton from '../form/payment-button'

type Props = {
  cart: CartWithCheckoutStep
}

export default function CheckoutReviewStep ({ cart }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get('step') === 'review'

  const previousStepsCompleted =
    cart.shipping_address &&
    cart.shipping_methods.length > 0 &&
    cart.payment_session

  return (
    <section className="mt-12">
      <div className='flex justify-between'>
        <h2 className={clsx(
          'font-semibold text-black text-3xl mb-4 flex items-center gap-2',
          { 'opacity-50 pointer-events-none select-none': !isOpen }
        )}>
          Revisar pedido
          {!isOpen && <CheckCircleIcon className='w-5 h-5' />}
        </h2>
      </div>
      {isOpen && previousStepsCompleted && (
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <p className="text-base text-gray-800 mb-1">
                By clicking the Place Order button, you confirm that you have
                read, understand and accept our Terms of Use, Terms of Sale and
                Returns Policy and acknowledge that you have read Medusa
                Store&apos;s Privacy Policy.
              </p>
            </div>
          </div>
          <PaymentButton cart={cart} />
        </>
      )}
    </section>
  )
}
