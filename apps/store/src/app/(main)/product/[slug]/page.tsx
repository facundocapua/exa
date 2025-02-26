import { STORE_URL } from '@/utils/const'
import { getProduct, getProducts } from 'api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductPage } from 'ui/components/product/product-page'

type Props = {
  params: Promise<{
    slug: string
  }>
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
    image: product.thumbnail ?? 'https://cdn.exabeauty.com.ar/exa-og.jpg',
    description: product.description ?? `${product.brand.name} ${product.title}`,
    offers: {
      '@type': 'Offer',
      price: Number(product.salePrice / 100),
      priceCurrency: 'ARS',
      availability: product.variants?.some(variant => variant.inventory_quantity > 0) ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock'
    }
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
    title: `${product.brand.name} ${product.title} | eXa Beauty Store`,
    description: product.description ?? `${product.brand.name} ${product.title}`,
    openGraph: {
      title: `${product.brand.name} ${product.title} | eXa Beauty Store`,
      description: product.description ?? `${product.brand.name} ${product.title}`,
      type: 'website',
      locale: 'es_AR',
      siteName: 'eXa Beauty Solutions',
      url: `https://exabeauty.com.ar/product/${product.handle}`,
      images: [
        {
          url: product.thumbnail ?? 'https://cdn.exabeauty.com.ar/exa-og.jpg',
          width: 640,
          height: 640,
          alt: product.title
        }
      ]
    },
    twitter: {
      card: 'summary',
      creator: '@eXaBeautyOk',
      title: `${product.brand.name} ${product.title} | eXa Beauty Store`,
      description: product.description ?? `${product.brand.name} ${product.title}`,
      site: '@eXaBeautyOk'
    },
    alternates: {
      canonical: `${STORE_URL}/product/${slug}`
    }
  }
}
