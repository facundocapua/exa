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
  const { slug } = params
  const product = await getProduct(slug)
  if (!product) return {}

  return {
    title: `${product.title} | ${STORE_NAME}`,
    description: product.description || 'Tienda de productos de belleza de marcas premium.',
    openGraph: {
      title: `${product.title} | ${STORE_NAME}`,
      description: product.description || 'Tienda de productos de belleza de marcas premium.',
      type: 'website',
      locale: 'es_AR',
      siteName: 'eXa Pros',
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
      title: `${product.title} | ${STORE_NAME}`,
      description: product.description || 'Tienda de productos de belleza de marcas premium.',
      site: '@eXaBeautyOk'
    },
    alternates: {
      canonical: `https://exabeauty.com.ar/product/${slug}`
    }
  }
}

export default async function Product ({ params }: Props) {
  const { slug } = params
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <ProductPage product={product} />
  )
}
