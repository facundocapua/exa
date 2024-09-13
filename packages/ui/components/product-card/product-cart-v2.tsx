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
  loading?: 'lazy' | 'eager' | undefined
}

export const ProductCardV2 = ({ product, containerClassName, loading = 'lazy' }: Props) => {
  return (
    <article className={clsx(
      'bg-white rounded-xl border flex flex-col justify-between group drop-shadow-md md:max-w-[300px]',
      containerClassName
    )}>
      <div className="relative basis-full flex flex-col p-2 md:p-0">
        <DiscountBadge price={product.price} salePrice={product.salePrice} />
        <Link href={`/product/${product.handle}`} className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-t-xl lg:aspect-none">
          <Image
            src={product.thumbnail ?? '/product-img-placeholder.svg'}
            alt={product.title}
            width={250}
            height={250}
            className="w-full h-full object-contain object-center bg-white  group-hover:scale-125 transition-transform duration-500"
            loading={loading}
            priority={loading === 'eager'}
          />
        </Link>
        <div className="flex flex-col grow justify-between px-2">
          <div>
            <Link href={`/brand/${product?.brand?.handle}`} className="py-3 block uppercase text-sm text-primary-700 dark:text-primary-300">{product?.brand?.name}</Link>
            <h3 className="text-base text-gray-900 dark:text-gray-200">
              <Link href={`/product/${product.handle}`}>{product.title}</Link>
            </h3>
          </div>
          <ProductPrice price={product.price} salePrice={product.salePrice} containerClassName='mt-0' priceClassName='text-base' />
        </div>
      </div>
      <div>
        <ProductAddToCart product={product} buttonClassName='md:rounded-t-none rounded-b-[11px] m-0 group-hover:opacity-75 transition-opacity duration-500' />
      </div>
    </article>
  )
}

export default ProductCardV2
