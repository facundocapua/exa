'use client'

import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import type { CartWithCheckoutStep } from 'api'
import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import ContinueButton from './continue-button'
import PaymentContainer from '../form/payment-container'
import type { FormEvent } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { setPaymentMethod } from '../actions'
import { paymentInfoMap } from '../../generic/constants'

type Props = {
  cart: CartWithCheckoutStep
}

export default function CheckoutPaymentStep ({ cart }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get('step') === 'payment'
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const paymentReady =
    cart?.payment_session && cart?.shipping_methods.length !== 0

  const handleEdit = () => {
    router.push(pathname + '?step=payment')
  }

  const set = async (providerId: string) => {
    setLoading(true)
    await setPaymentMethod(providerId)
      .catch((err) => setMessage(err.toString()))
      .finally(() => {
        if (providerId === 'paypal') return
        setLoading(false)
      })
  }

  const handleChange = (providerId: string) => {
    setMessage(null)
    set(providerId)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    router.push(pathname + '?' + createQueryString('step', 'review'), {
      scroll: false
    })
  }

  useEffect(() => {
    setLoading(false)
    setMessage(null)
  }, [isOpen])

  return (
    <section className="mt-12">
      <div className='flex justify-between'>
        <h2 className={clsx(
          'font-semibold text-black text-3xl mb-4 flex items-center gap-2 dark:text-gray-50',
          { 'opacity-50 pointer-events-none select-none': !isOpen && cart.shipping_methods.length === 0 }
        )}>
          Pago
          {!isOpen && paymentReady && <CheckCircleIcon className='w-5 h-5' />}
        </h2>
        {!isOpen && paymentReady && (
        <button onClick={handleEdit} className='text-primary-600 text-sm dark:text-primary-400'>Editar</button>
        )}
      </div>

      <form onSubmit={handleSubmit}>
        {cart?.payment_sessions?.length
          ? (
            <div className={isOpen ? 'block' : 'hidden'}>
              <RadioGroup
                value={cart.payment_session?.provider_id || ''}
                onChange={(value: string) => handleChange(value)}
              >
                {cart.payment_sessions
                  .sort((a, b) => {
                    return a.provider_id > b.provider_id ? 1 : -1
                  })
                  .map((paymentSession) => (
                    <PaymentContainer
                      paymentInfoMap={paymentInfoMap}
                      paymentSession={paymentSession}
                      key={paymentSession.id}
                      selectedPaymentOptionId={
                        cart.payment_session?.provider_id || null
                      }
                    />
                  )
                  )}
              </RadioGroup>

              {message && (<p className='text-red-600'>{message}</p>)}

              <ContinueButton loading={loading}>Revisar pedido</ContinueButton>
            </div>
            )
          : (
            <div className="flex flex-col items-center justify-center px-4 py-16 text-ui-fg-base">
              {/* <Spinner /> */}
            </div>
            )}
      </form>
    </section>
  )
}
