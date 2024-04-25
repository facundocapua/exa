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
    title: `${product.title} | eXa Beauty Store`,
    description: product.description || 'Tienda de productos de belleza de marcas premium.',
    openGraph: {
      title: `${product.title} | eXa Beauty Store`,
      description: product.description || 'Tienda de productos de belleza de marcas premium.',
      type: 'website',
      locale: 'es_AR',
      siteName: 'eXa Beauty Solutions',
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
      title: `${product.title} | eXa Beauty Store`,
      description: product.description || 'Tienda de productos de belleza de marcas premium.',
      site: '@eXaBeautyOk'
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
