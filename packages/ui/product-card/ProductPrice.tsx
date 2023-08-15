import type { Product } from 'api'
import Price from '../Price'

type Props = {
  price: Product['price'],
  salePrice: Product['salePrice']
}

export default function ProductPrice ({ price, salePrice }: Props) {
  return (
    <div className="flex gap-2 mt-6 items-center">
      <Price amount={salePrice} className='text-lg text-neutral-600' />
      { salePrice < price && <Price amount={price} className='line-through text-neutral-400 text-sm' /> }
    </div>
  )
}
