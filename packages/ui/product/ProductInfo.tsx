import type { Product } from 'api'
import Price from '../generic/Price'
import ProductAddToCart from './ProductAddToCart'
import ProductColorSelector from './ProductColorSelector'
import Link from 'next/link'

type Props = {
  product: Product
}

export default function ProductInfo ({ product }: Props) {
  console.log(product)
  return (
    <>
      <Link href={`/brand/${product.brand.slug}`} className='block uppercase text-sm text-primary-700 mb-4'>{product.brand.name}</Link>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
      <div className="mt-3">
        <h2 className="sr-only">Información de producto</h2>
        <div className="flex gap-2 mt-6 items-center">
          <Price amount={product.sale_price} className='text-xl text-neutral-600' />
          { product.sale_price   < product.price && <Price amount={product.price} className='line-through text-neutral-400 text-md' /> }
        </div>
      </div>

      { product.variants && product.variants.length > 0 && (
        <ProductColorSelector variants={product.variants} />
      )}

      <ProductAddToCart sku={product.sku} className='my-8' />

      <div className="mt-6">
        <h3 className="sr-only">Descripción</h3>

        <div
          className="prose mx-auto max-w-6xl text-base leading-7 text-gray-700 prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </div>
    </>
  )
}
