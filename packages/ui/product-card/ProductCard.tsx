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
      'bg-white md:p-2 rounded-md border border-neutral-200 flex flex-col justify-between',
      containerClassName
    )}>
      <div className="group relative basis-full flex flex-col p-2 md:p-0">
        <DiscountBadge price={product.price} salePrice={product.sale_price} />
        <Link href={`/product/${product.slug}`} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
          <Image
            src={product.images[0].image}
            alt={product.name}
            width={250}
            height={250}
            className="w-full h-full object-contain object-center"
          />
        </Link>
        <div className="flex flex-col grow justify-between">
          <div>
            <Link href={`/brand/${product?.brand?.slug}`} className="my-2 block uppercase text-sm text-primary-700">{product?.brand?.name}</Link>
            <h3 className="text-sm text-gray-900">
              <Link href={`/product/${product.slug}`}>{product.name}</Link>
            </h3>
          </div>
          <ProductPrice price={product.price} salePrice={product.sale_price} />
        </div>
      </div>
      <div className="mt-6">
        <ProductAddToCart sku={product.sku} />
      </div>
    </article>
  )
}
