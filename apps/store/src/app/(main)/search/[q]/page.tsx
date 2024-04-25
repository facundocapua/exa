import { getFilteredSearchProducts } from 'api'
import { redirect } from 'next/navigation'
import { ProductListPage } from 'ui/server'

type Props = {
  params: {
    q: string
  }
  searchParams: Record<string, string>
}

export default async function SearchPage ({ params, searchParams }: Props) {
  const breadcrumbs = []
  const { q } = params
  if (!q) {
    redirect('/')
  }

  breadcrumbs.push({
    name: `Resultados para "${q}"`,
    url: `/search?q=${q}`,
    current: true
  })

  const { filters, products, total } = await getFilteredSearchProducts({
    q,
    filters: searchParams,
    exclude: []
  })

  return (
    <ProductListPage
      breadcrumbs={breadcrumbs}
      searchParams={searchParams}
      filters={filters}
      products={products}
      total={total}
      title={`Resultados para "${q}"`}
      url={`/search/${q}`}
    />
  )
}
