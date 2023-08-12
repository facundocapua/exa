import type { Product } from 'api'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  product: Product
}

export default function ProductCard ({ product }: Props) {
  return (
    <div className='bg-white p-4'>
      <div key={product.id} className="group relative">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={product.images[0]}
            alt={product.name}
            width={175}
            height={175}
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href={product.slug}>
                <span aria-hidden="true" className="absolute inset-0" />
                {product.name}
              </Link>
            </h3>
            <Link href={`/brand/${product.brand.slug}`} className="mt-1 text-sm text-gray-500">{product.brand.name}</Link>
          </div>
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
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
    </div>
  )
}
