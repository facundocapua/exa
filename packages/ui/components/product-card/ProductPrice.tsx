import clsx from 'clsx'
import Price from '../generic/Price'
import { twMerge } from 'tailwind-merge'

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
    <div className={clsx(twMerge(
      'flex gap-2 mt-6 items-center',
      containerClassName
    ))}>
      <Price amount={salePrice} className={clsx(twMerge('text-lg text-neutral-600 dark:text-neutral-300', priceClassName))} />
      { salePrice < price && <Price amount={price} className={clsx(twMerge('line-through text-neutral-400 dark:text-neutral-300 text-sm', salePriceClassName))} /> }
    </div>
  )
}
