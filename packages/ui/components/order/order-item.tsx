import type { CartItem } from 'api'
import { formatPrice } from '../../server'
import ProductImage from '../product/product-image'

type Props = {
  item: CartItem
}

export default function OrderItem ({ item }: Props) {
  const image = item.variant.metadata?.image as string || item.variant.product.thumbnail || '/placeholder.svg'

  return (
    <li className="flex justify-between gap-x-6 py-5">
      <div className="flex min-w-0 gap-x-4">
        <ProductImage image={image} title={item.title} width={64} height={64} />
        <div className="min-w-0 flex-auto">
          <p className="text-sm leading-6 text-neutral-900 dark:text-neutral-100">{item.title}</p>
          {item.variant.title && <p className="text-sm leading-6 text-neutral-500 dark:text-neutral-400">{item.variant.title}</p>}
        </div>
      </div>
      <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
        <p className='text-sm leading-6 text-neutral-400 dark:text-neutral-500'>{item.quantity} x {formatPrice(item.unit_price / 100)}</p>
        <p className="text-base leading-6 text-neutral-500 dark:text-neutral-400">{formatPrice(Number(item.subtotal) / 100)}</p>
      </div>
    </li>
  )
}
