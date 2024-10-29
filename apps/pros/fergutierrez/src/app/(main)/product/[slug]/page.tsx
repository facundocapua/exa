// import RelatedProducts from '@/components/product/RelatedProducts'
import { STORE_NAME, STORE_OG_IMAGE, STORE_URL } from '@/utils/const'
import { getProduct, getProducts } from 'api'
import { Metadata } from 'next'
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

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const product = await getProduct(slug)
  if (!product) return {}

  return {
    title: `${product.brand.name} ${product.title} | ${STORE_NAME}`,
    description: product.description ?? `${product.brand.name} ${product.title}`,
    openGraph: {
      title: `${product.brand.name} ${product.title} | ${STORE_NAME}`,
      description: product.description ?? `${product.brand.name} ${product.title}`,
      type: 'website',
      locale: 'es_AR',
      siteName: 'eXa Pro',
      images: [
        {
          url: product.thumbnail ?? STORE_OG_IMAGE,
          width: product.thumbnail ? 630 : 1200,
          height: 630,
          alt: product.title
        }
      ]
    },
    twitter: {
      card: 'summary',
      creator: '@eXaBeautyOk',
      title: `${product.brand.name} ${product.title} | ${STORE_NAME}`,
      description: product.description ?? `${product.brand.name} ${product.title}`,
      site: '@eXaBeautyOk'
    },
    alternates: {
      canonical: `${STORE_URL}/product/${slug}`
    }
  }
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
            <Suspense fallback={<div>Loading...</div>}>
              <ProductImageGallery product={product} />
            </Suspense>
            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Suspense fallback={<div>Loading...</div>}>
                <ProductInfo product={product} />
              </Suspense>
            </div>
          </div>

        </div>
      </section>
      <Suspense fallback={<div>Loading...</div>}>
        <RelatedProducts product={product} />
      </Suspense>
    </main>
  )
}
