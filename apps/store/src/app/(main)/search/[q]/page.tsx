import SectionTitle from '@/components/section-title'
import { getFilteredSearchProducts } from 'api'
import { redirect } from 'next/navigation'
import { Breadcrumb, ProductListPage } from 'ui/server'

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
    <main className="mx-auto max-w-2xl px-4 md:px-0 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <SectionTitle>{`Resultados para "${q}"`}</SectionTitle>

      <ProductListPage
        searchParams={searchParams}
        filters={filters}
        products={products}
        total={total}
        url={`/search/${q}`}
        theme='v2'
      />
    </main>
  )
}
