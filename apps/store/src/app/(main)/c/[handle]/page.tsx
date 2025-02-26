import { STORE_URL } from '@/utils/const'
import { getCollection, getCollectionProducts, Product } from 'api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TrackProductList from 'ui/components/ga/track-product-list'
import { Breadcrumb, ProductCard } from 'ui/server'

type Props = {
  params: Promise<{
    handle: string
  }>
  searchParams: Promise<Record<string, string>>
}

// export async function generateStaticParams () {
//   const collections = await getCollections()

//   return collections
//     .filter((collection) => collection?.metadata?.isPage)
//     .map(({ handle }) => ({
//       handle
//     }))
// }

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  const { handle } = await params
  const collection = await getCollection(handle)
  if (!collection) return {}

  return {
    title: `${collection.title} | eXa Beauty Store`,
    description: 'Tienda de productos de belleza de marcas premium.',
    openGraph: {
      title: `${collection.title} | eXa Beauty Store`,
      description: 'Tienda de productos de belleza de marcas premium.',
      type: 'website',
      locale: 'es_AR',
      siteName: 'eXa Beauty Solutions',
      url: `https://exabeauty.com.ar/c/${collection.handle}`,
      images: [
        {
          url: collection.metadata.image as string ?? 'https://exabeauty.com.ar/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'eXa Beauty Store'
        }
      ]
    },
    twitter: {
      card: 'summary',
      creator: '@eXaBeautyOk',
      title: `${collection.title} | eXa Beauty Store`,
      description: 'Tienda de productos de belleza de marcas premium.',
      site: '@eXaBeautyOk'
    },
    alternates: {
      canonical: `${STORE_URL}/c/${handle}`
    }
  }
}

export default async function CollectionPage ({ params, searchParams }: Props) {
  const { handle } = await params
  const collection = await getCollection(handle)
  if (!collection) {
    notFound()
  }

  const brecrumbs = []
  if (collection) {
    brecrumbs.push({
      name: collection.title,
      url: `/${collection.handle}`,
      current: true
    })
  }

  const products = await getCollectionProducts(handle) as Product[]

  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={brecrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight text-neuborder-neutral-900">{collection.title}</h1>
      </div>

      <div className="pb-24 pt-12">
        <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
          <h2 id="product-heading" className="sr-only">
            Products
          </h2>

          {products.length === 0 && (<span>No se encontraron productos</span>)}

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>

      <TrackProductList products={products} listId={`category-${collection.handle}`} />
    </div>
  )
}
