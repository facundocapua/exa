import RelatedProducts from '@/components/product/RelatedProducts'
import { getProduct } from 'api'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { ProductImageGallery, ProductInfo } from 'ui'

type Props = {
  params: {
    slug: string
  }
}

export default async function Product ({ params }: Props) {
  const { slug } = params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <main>
      <section className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 mb-4">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <ProductImageGallery product={product} />
            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo product={product} />
            </div>
          </div>

        </div>
      </section>
      <Suspense>
        <RelatedProducts sku={product.sku} />
      </Suspense>
    </main>
  )
}
