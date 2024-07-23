'use client'

import type { CartWithCheckoutStep, ShippingMethod } from 'api'
import { setShippingMethod } from '../actions'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { RadioGroup } from '@headlessui/react'
import { formatPrice } from '../../../utils/price'
import Radio from '../../form/radio'
import type { FormEvent } from 'react'
import { useEffect, useState } from 'react'
import ContinueButton from './continue-button'
import ShippingInfo from '../form/shipping-info'

type Props = {
  cart: CartWithCheckoutStep
  availableShippingMethods: ShippingMethod[] | null
}

export default function CheckoutDevliveryStep ({ cart, availableShippingMethods }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const isOpen = searchParams.get('step') === 'delivery'
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleEdit = () => {
    router.push(pathname + '?step=delivery')
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    const nextStep = cart.payment_sessions?.length > 1 ? 'payment' : 'review'
    router.push(pathname + `?step=${nextStep}`, { scroll: false })
  }

  const handleChange = async (value: string) => {
    setLoading(true)
    const message = await setShippingMethod(value)
    setMessage(message)
    setLoading(false)
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
          Envío
          {!isOpen && cart.shipping_methods.length > 0 && <CheckCircleIcon className='w-5 h-5' />}
        </h2>
        {!isOpen &&
          cart?.shipping_address &&
          cart?.billing_address &&
          cart?.email && (
            <button onClick={handleEdit} className='text-primary-600 text-sm dark:text-primary-400'>Editar</button>
        )}
      </div>
      { isOpen
        ? (
          <form onSubmit={handleSubmit}>
            <div>
              <RadioGroup
              value={cart.shipping_methods[0]?.shipping_option_id}
              onChange={(value: string) => handleChange(value)}
            >
                {availableShippingMethods
                  ? (
                      availableShippingMethods.map((option) => {
                        return (
                          <RadioGroup.Option
                          key={option.id}
                          value={option.id}
                          className={clsx(
                            'flex items-center justify-between text-small-regular cursor-pointer py-4 border rounded-lg px-8 mb-2 hover:shadow-interactive dark:bg-gray-800',
                            {
                              'border-primary-600 dark:border-primary-400':
                                option.id ===
                                cart.shipping_methods[0]?.shipping_option_id
                            }
                          )}
                        >
                            <div className="flex items-center gap-x-4">
                              <Radio
                              checked={
                                option.id ===
                                cart.shipping_methods[0]?.shipping_option_id
                              }
                            />
                              <span className="text-base-regular">{option.name}</span>
                            </div>
                            <span className="justify-self-end text-ui-fg-base">
                              {Math.floor(option.amount! / 100) > 0 ? formatPrice(option.amount! / 100) : 'Gratis'}
                            </span>
                          </RadioGroup.Option>
                        )
                      })
                    )
                  : (
                    <div className="flex flex-col items-center justify-center px-4 py-8 text-ui-fg-base">
                      {/* <Spinner /> */}
                    </div>
                    )}
              </RadioGroup>
            </div>

            {message && (<p className='text-red-600'>{message}</p>)}

            <ContinueButton loading={loading}>Continuar con el pago</ContinueButton>
          </form>
          )
        : (<ShippingInfo cart={cart} />)
      }
    </section>
  )
}
