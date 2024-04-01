import { RadioGroup } from '@headlessui/react'

import PaymentTest from './payment-test'
import type { PaymentSession } from 'api'
import clsx from 'clsx'
import Radio from '../../form/radio'

type Props = {
  paymentSession: PaymentSession
  selectedPaymentOptionId: string | null
  disabled?: boolean
  paymentInfoMap: Record<string, { title: string; icon: JSX.Element }>
}

export default function PaymentContainer ({
  paymentSession,
  selectedPaymentOptionId,
  paymentInfoMap,
  disabled = false
}: Props) {
  const isDevelopment = process.env.NODE_ENV === 'development'

  return (
    <>
      <RadioGroup.Option
        key={paymentSession.id}
        value={paymentSession.provider_id}
        disabled={disabled}
        className={clsx(
          'flex flex-col gap-y-2 text-small-regular cursor-pointer py-4 border rounded-lg px-8 mb-2 hover:shadow-interactive',
          {
            'border-primary-600':
              selectedPaymentOptionId === paymentSession.provider_id
          }
        )}
      >
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-x-4">
            <Radio
              checked={selectedPaymentOptionId === paymentSession.provider_id}
            />
            <p>
              {paymentInfoMap[paymentSession.provider_id]?.title ||
                paymentSession.provider_id}
            </p>
            {paymentSession.provider_id === 'manual' && isDevelopment && (
              <PaymentTest className="hidden small:block" />
            )}
          </div>
          <span className="justify-self-end text-gray-700">
            {paymentInfoMap[paymentSession.provider_id]?.icon}
          </span>
        </div>
        {paymentSession.provider_id === 'manual' && isDevelopment && (
          <PaymentTest className="small:hidden text-[10px]" />
        )}
      </RadioGroup.Option>
    </>
  )
}
