import Price from '../generic/Price'

type Props = {
  price: number,
  salePrice: number
}

export default function ProductPrice ({ price, salePrice }: Props) {
  if (!price) return null

  return (
    <div className="flex gap-2 mt-6 items-center">
      <Price amount={salePrice} className='text-lg text-neutral-600 dark:text-neutral-300' />
      { salePrice < price && <Price amount={price} className='line-through text-neutral-400 dark:text-neutral-300 text-sm' /> }
    </div>
  )
}
