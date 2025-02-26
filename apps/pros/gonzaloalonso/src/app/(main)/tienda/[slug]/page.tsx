import SectionTitle from '@/components/section-title'
import { STORE_NAME, STORE_OG_IMAGE } from '@/utils/const'
import { getCategories, getCategory, getFilteredProducts } from 'api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import TrackProductList from 'ui/components/ga/track-product-list'
import { Breadcrumb, ProductListPage } from 'ui/server'
import { cleanFilters } from 'utils'

type Props = {
  params: {
    slug: string
  }
  searchParams: Record<string, string>
}

export async function generateStaticParams () {
  const categories = await getCategories()

  return categories.map((category) => ({
    slug: category.handle
  }))
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategory(slug)
  if (!category) return {}

  return {
    title: `${category.name} | ${STORE_NAME}`,
    description: category.description || 'Tienda de productos de belleza de marcas premium.',
    openGraph: {
      title: `${category.name} | ${STORE_NAME}`,
      description: category.description || 'Tienda de productos de belleza de marcas premium.',
      type: 'website',
      locale: 'es_AR',
      siteName: 'eXa Pro',
      images: [
        {
          url: STORE_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: STORE_NAME
        }
      ]
    },
    twitter: {
      card: 'summary',
      creator: '@eXaBeautyOk',
      title: `${category.name} | ${STORE_NAME}`,
      description: category.description || 'Tienda de productos de belleza de marcas premium.',
      site: '@eXaBeautyOk'
    }

  }
}

export default async function Category ({ params, searchParams }: Props) {
  const { slug } = await params
  const category = await getCategory(slug)
  const cleanedSearchParams = cleanFilters(await searchParams)

  if (!category) {
    notFound()
  }

  const breadcrumbs = [
    {
      name: 'Tienda',
      url: '/tienda',
      current: false
    }
  ]

  if (category) {
    const { parent_category: parent } = category

    if (parent) {
      breadcrumbs.push({
        name: parent.name,
        url: `/${parent.handle}`,
        current: false
      })
    }

    breadcrumbs.push({
      name: category.name,
      url: `/${category.handle}`,
      current: true
    })
  }

  const { filters, products, total } = await getFilteredProducts({
    restrinctions: { category: slug },
    filters: cleanedSearchParams,
    exclude: ['category']
  })

  if (!products) return null

  return (
    <main className="mx-auto max-w-2xl px-4 md:px-0 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <SectionTitle>{category.name}</SectionTitle>

      <ProductListPage
        searchParams={cleanedSearchParams}
        filters={filters}
        products={products}
        total={total}
        url={`/${category.handle}`}
        theme='v2'
      />

      <TrackProductList products={products} listId={`category-${category.handle}`} />
    </main>
  )
}
