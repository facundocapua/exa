import type { Product } from 'api'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = {
  products: Product[]
  containerClassName?: string
}
export const SearchResults = ({ products, containerClassName }: Props) => {
  return (
    <div className={clsx(twMerge(
      'absolute bg-white rounded-md drop-shadow-md -ml-4 md:ml-0 z-20 py-4 flex flex-col gap-y-2 max-h-screen overflow-y-auto',
      containerClassName
    ))}>
      {products.map((product) => (
        <Link href={`/product/${product.handle}`} key={product.id} className="group">
          <article className="flex items-center group-hover:bg-neutral-100 p-2">
            <Image src={product.thumbnail ?? ''} width={50} height={50} alt={product.title} />
            <h4>{product.title}</h4>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default SearchResults
