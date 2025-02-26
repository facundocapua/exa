import { STORE_NAME, STORE_OG_IMAGE } from '@/utils/const'
import { getProduct, getProducts } from 'api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductPage } from 'ui/components/product/product-page'

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
  const { slug } = await params
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
    }
    // alternates: {
    //   canonical: `https://exabeauty.com.ar/product/${slug}`
    // }
  }
}

export default async function Product ({ params }: Props) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${product.brand.name} ${product.title}`,
    image: product.thumbnail ?? STORE_OG_IMAGE,
    description: product.description ?? `${product.brand.name} ${product.title}`
  }

  return (
    <>
      <ProductPage product={product} />
      {/* Add JSON-LD to your page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  )
}
