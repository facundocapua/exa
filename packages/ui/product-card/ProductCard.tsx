import type { Product } from 'api'
import Image from 'next/image'
import Link from 'next/link'
import ProductPrice from './ProductPrice'
import DiscountBadge from './DiscountBadge'
import clsx from 'clsx'

type Props = {
  product: Product
  containerClassName?: string
}

export default function ProductCard ({ product, containerClassName }: Props) {
  return (
    <article className={clsx(
      'bg-white p-2 rounded-md border border-neutral-200 flex flex-col justify-between',
      containerClassName
    )}>
      <div className="group relative basis-full flex flex-col">
        <DiscountBadge price={product.price} salePrice={product.salePrice} />
        <Link href={`/product/${product.slug}`} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={175}
            height={175}
            className="h-full w-full object-cover object-center"
          />
        </Link>
        <div className="flex flex-col grow justify-between">
          <div>
            <Link href={`/brand/${product?.brand?.slug}`} className="my-2 block uppercase text-sm text-primary-700">{product?.brand?.name}</Link>
            <h3 className="text-sm text-gray-900">
              <Link href={`/product/${product.slug}`}>{product.name}</Link>
            </h3>
          </div>
          <ProductPrice price={product.price} salePrice={product.salePrice} />
        </div>
      </div>
      <div className="mt-6">
        <Link
          href="#"
          className="relative flex items-center justify-center rounded-md border border-transparent bg-neutral-100 px-8 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200"
        >
          Comprar
        </Link>
      </div>
    </article>
  )
}
