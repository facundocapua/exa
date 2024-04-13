import { getCategories, getCategory, getFilteredProducts } from 'api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ProductListPage } from 'ui/server'
import { i } from 'vitest/dist/reporters-P7C2ytIv'

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

export async function generateMetadata ({ params, searchParams }: Props): Promise<Metadata> {
  const { slug } = params
  const category = await getCategory(slug)
  if (!category) return null

  return {
    title: `${category.name} | eXa Beauty Store`,
    description: category.description || 'Tienda de productos de belleza de marcas premium.',
    openGraph: {
      title: `${category.name} | eXa Beauty Store`,
      description: category.description || 'Tienda de productos de belleza de marcas premium.',
      type: 'website',
      locale: 'es_AR',
      siteName: 'eXa Beauty Solutions',
      images: [
        {
          url: 'https://cdn.exabeauty.com.ar/exa-og.jpg',
          width: 1200,
          height: 630,
          alt: 'eXa Beauty Store'
        }
      ]
    },
    twitter: {
      card: 'summary',
      creator: '@eXaBeautyOk',
      title: `${category.name} | eXa Beauty Store`,
      description: category.description || 'Tienda de productos de belleza de marcas premium.',
      site: '@eXaBeautyOk'
    }
  }
}

export default async function Category ({ params, searchParams }: Props) {
  const { slug } = params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const breadcrumbs = []

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
    filters: searchParams,
    exclude: ['category']
  })

  return (
    <ProductListPage
      breadcrumbs={breadcrumbs}
      searchParams={searchParams}
      filters={filters}
      products={products}
      total={total}
      title={category.name}
      url={`/${category.handle}`}
    />
  )
}
