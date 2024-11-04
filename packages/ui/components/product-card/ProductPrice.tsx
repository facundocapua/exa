import clsx from 'clsx'
import Price from '../generic/Price'
import { twMerge } from 'tailwind-merge'
import { CreditCardIcon } from '@heroicons/react/20/solid'

type Props = {
  price: number,
  salePrice: number
  containerClassName?: string
  priceClassName?: string
  salePriceClassName?: string
}

export default function ProductPrice ({ price, salePrice, containerClassName, priceClassName, salePriceClassName }: Props) {
  if (!price) return null

  return (
    <>
      <div className={clsx(twMerge(
        'flex gap-2 mt-6 items-center',
        containerClassName
      ))}>
        <Price amount={salePrice} className={clsx(twMerge('text-lg text-neutral-600 dark:text-neutral-300', priceClassName))} />
        { salePrice < price && <Price amount={price} className={clsx(twMerge('line-through text-neutral-500 dark:text-neutral-300 text-sm', salePriceClassName))} /> }
      </div>
      <div className='flex items-center gap-x-2 text-neutral-600 text-sm'>
        <CreditCardIcon className='w-4 h-4 text-neutral-600 dark:text-neutral-300 hidden md:block' />
        3 cuotas de <Price amount={salePrice / 3} className='text-primary-700 dark:text-neutral-300 text-base font-semibold' />
      </div>
    </>
  )
}
