import type { Product } from 'api'
import Image from 'next/image'
import Link from 'next/link'
import ProductPrice from './ProductPrice'
import DiscountBadge from './DiscountBadge'
import clsx from 'clsx'
import ProductAddToCart from '../product/ProductAddToCart'

type Props = {
  product: Product
  containerClassName?: string
}

export default function ProductCard ({ product, containerClassName }: Props) {
  return (
    <article className={clsx(
      'bg-white md:p-2 rounded-md border border-neutral-200 flex flex-col justify-between dark:bg-gray-600 dark:border-gray-700',
      containerClassName
    )}>
      <div className="group relative basis-full flex flex-col p-2 md:p-0">
        <DiscountBadge price={product.price} salePrice={product.salePrice} />
        <Link href={`/product/${product.handle}`} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75">
          <Image
            src={product.thumbnail ?? '/product-img-placeholder.svg'}
            alt={product.title}
            width={250}
            height={250}
            className="w-full h-full object-contain object-center bg-white"
            loading='lazy'
          />
        </Link>
        <div className="flex flex-col grow justify-between">
          <div>
            <Link href={`/brand/${product?.brand?.handle}`} className="py-3 block uppercase text-sm text-primary-700 dark:text-primary-300">{product?.brand?.name}</Link>
            <h3 className="text-base text-gray-900 dark:text-gray-200">
              <Link href={`/product/${product.handle}`}>{product.title}</Link>
            </h3>
          </div>
          <ProductPrice price={product.price} salePrice={product.salePrice} />
        </div>
      </div>
      <div className="mt-2">
        <ProductAddToCart product={product} />
      </div>
    </article>
  )
}
