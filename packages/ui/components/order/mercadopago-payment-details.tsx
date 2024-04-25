import type { MercadoPagoPayment } from 'api'
import { AmexIcon, MaestroIcon, MastercardIcon, MercadoPagoIcon, NaranjaIcon, VisaDebitIcon, VisaIcon } from '../icons'
import { formatPriceWithDecimals } from '../../utils/price'
import { formatDateSmall } from '../../utils/date'

type PaymentInfoMapType = Record<string, {
  icon: JSX.Element
  title?: string
}>

const paymentInfoMap: PaymentInfoMapType = {
  master: {
    icon: <MastercardIcon className='w-12 h-12 rounded-full bg-neutral-300' />,
    title: 'Mastercard'
  },
  visa: {
    icon: <VisaIcon className='w-12 h-12 rounded-full bg-neutral-300' />,
    title: 'Visa'
  },
  'visa-debit': {
    icon: <VisaDebitIcon className='w-12 h-12 rounded-full bg-neutral-300' />,
    title: 'Visa Débito'
  },
  amex: {
    icon: <AmexIcon className='w-12 h-12 rounded-full bg-neutral-300' />,
    title: 'American Express'
  },
  maestro: {
    icon: <MaestroIcon className='w-12 h-12 rounded-full bg-neutral-300' />,
    title: 'Maestro'
  },
  naranja: {
    icon: <NaranjaIcon className='w-12 h-12 rounded-full bg-neutral-300' />,
    title: 'Naranja'
  },
  account_money: {
    icon: <MercadoPagoIcon className='w-32' />,
    title: 'Mercado Pago'
  },
  default: {
    icon: <MercadoPagoIcon className='w-32' />
  }
}

type Props = {
  payment: MercadoPagoPayment
}

export default function MercadoPagoPaymentDetails ({ payment }: Props) {
  const { data } = payment
  return (
    <article className='flex justify-start items-start gap-4'>
      <header>
        {paymentInfoMap[data.payment_method?.id]?.icon ?? paymentInfoMap.default!.icon}
      </header>
      <footer className='flex flex-col gap-1'>
        {data.payment_method_id === 'account_money'
          ? (
            <p className='text-base font-medium text-neutral-700'>{formatPriceWithDecimals(data.transaction_details.total_paid_amount)}</p>
            )
          : (
            <>
              <p className='text-base font-medium text-neutral-700'>{data.installments}x {formatPriceWithDecimals(data.transaction_details.installment_amount)}</p>
              <p className='text-xs text-neutral-700'>
                {paymentInfoMap[data.payment_method?.id]?.title ?? data.payment_method?.id}
                {data.card && `  ****  ${data.card.last_four_digits}`}
              </p>
            </>
            )}

        <p className='text-xs text-neutral-700'>
          {formatDateSmall(data.date_created)} | # {data.id}
        </p>
      </footer>
    </article>
  )
}
