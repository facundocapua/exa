import clsx from 'clsx'
import Link from 'next/link'
import ProductPrice from './ProductPrice'
import Image from 'next/image'
import Placeholder from './product-img-placeholder.svg'

type Props = {
  containerClassName?: string
}

export const ProductCardSkeleton = ({ containerClassName }: Props) => {
  return (
    <article className={clsx(
      'bg-white md:p-2 rounded-md border border-neutral-200 flex flex-col justify-between dark:bg-gray-600 dark:border-gray-700 animate-pulse',
      containerClassName
    )}>
      <div className="group relative basis-full flex flex-col p-2 md:p-0">
        <Link href='#' className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none">
          <Image
            src={Placeholder}
            alt="Product title"
            width={250}
            height={250}
            className="w-full h-full object-contain object-center bg-white"
          />
        </Link>
        <div className="flex flex-col grow justify-between">
          <div>
            {/* <span className="my-2 block uppercase text-sm text-primary-700 dark:text-primary-300">Brand</span> */}
            <div className='my-3 block bg-primary-700/20 h-[10px] w-3/5'></div>
            <div className='my-3 block bg-neutral-700/20 h-[20px] w-4/5'></div>
            {/* <h3 className="text-sm text-gray-900 dark:text-gray-200 h-[40px]">
              Title
            </h3> */}
          </div>
          <ProductPrice price={9999} salePrice={8999} />
        </div>
      </div>
      <div className="mt-2">
        <span className='text-xs'>&nbsp;</span>
        <button
          aria-label="Agregar al carrito"
          aria-disabled={true}
          disabled={true}
          type="button"
          className={clsx(
            'flex items-center justify-center md:rounded-md bg-primary-600 w-full py-4 text-base font-medium text-white hover:bg-primary-700 focus:outline-none',
            'disabled:opacity-50 disabled:cursor-not-allowed'
          )}
        >
          Comprar
        </button>
      </div>
    </article>
  )
}

export default ProductCardSkeleton
