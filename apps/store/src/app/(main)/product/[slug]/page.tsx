import { getProduct, getProducts } from 'api'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { ProductImageGallery } from 'ui'
import { ProductInfo, RelatedProducts } from 'ui/server'

type Props = {
  params: {
    slug: string
  }
}

export async function generateStaticParams () {
  const products = await getProducts()

  return products.map((product) => ({
    slug: product.handle
  }))
}

export default async function Product ({ params }: Props) {
  const { slug } = params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  // if (product.variants) {
  //   product.variants = product.variants.sort((a, b) => a.sort - b.sort)
  // }

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
        <RelatedProducts sku={product.id} />
      </Suspense>
    </main>
  )
}
