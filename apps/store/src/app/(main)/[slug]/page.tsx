import { getCategories, getCategory, getFilteredProducts } from 'api'
import { notFound } from 'next/navigation'
import { ProductListPage } from 'ui/server'

type Props = {
  params: {
    slug: string
  }
  searchParams: Record<string, string>
}

export async function generateStaticParams () {
  const categories = await getCategories()

  return categories.map((category) => ({
    slug: category.slug
  }))
}

export default async function Category ({ params, searchParams }: Props) {
  const { slug } = params
  const category = await getCategory(slug)

  if (!category) {
    notFound()
  }

  const brecrumbs = []

  if (category) {
    const { parent } = category
    if (parent) {
      brecrumbs.push({
        name: parent.name,
        url: `/${parent.slug}`,
        current: false
      })
    }

    brecrumbs.push({
      name: category.name,
      url: `/${category.slug}`,
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
      brecrumbs={brecrumbs}
      searchParams={searchParams}
      filters={filters}
      products={products}
      total={total}
      title={category.name}
      url={`/${category.slug}`}
    />
  )
}
