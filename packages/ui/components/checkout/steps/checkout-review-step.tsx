'use client'

import { CheckCircleIcon } from '@heroicons/react/24/solid'
import type { CartWithCheckoutStep } from 'api'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import PaymentButton from '../form/payment-button'

type Props = {
  cart: CartWithCheckoutStep
  title?: string
}

export default function CheckoutReviewStep ({ cart, title }: Props) {
  const searchParams = useSearchParams()

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
          {title || 'Revisar pedido'}
          {!isOpen && <CheckCircleIcon className='w-5 h-5' />}
        </h2>
      </div>
      {isOpen && previousStepsCompleted && (
        <>
          <div className="flex items-start gap-x-1 w-full mb-6">
            <div className="w-full">
              <p className="text-base text-gray-800 mb-1">
                Al hacer clic en el botón de Pagar, aceptas los <a href="/terminos-y-condiciones" target='_blank' className='underline'>términos y condiciones</a> de la tienda.
              </p>
            </div>
          </div>
          <PaymentButton cart={cart} />
        </>
      )}
    </section>
  )
}
