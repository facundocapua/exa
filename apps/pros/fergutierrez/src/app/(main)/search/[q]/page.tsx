import SectionTitle from '@/components/section-title'
import { getFilteredSearchProducts } from 'api'
import { redirect } from 'next/navigation'
import { Breadcrumb, ProductListPage } from 'ui/server'

type Props = {
  params: Promise<{
    q: string
  }>
  searchParams: Promise<Record<string, string>>
}

export default async function SearchPage ({ params, searchParams }: Props) {
  const breadcrumbs = []
  const { q } = await params
  if (!q) {
    redirect('/')
  }

  breadcrumbs.push({
    name: `Resultados para "${q}"`,
    url: `/search?q=${q}`,
    current: true
  })

  const sp = await searchParams
  const { filters, products, total } = await getFilteredSearchProducts({
    q,
    filters: sp,
    exclude: []
  })

  return (
    <main className="mx-auto max-w-2xl px-4 md:px-0 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <SectionTitle>{`Resultados para "${q}"`}</SectionTitle>

      <ProductListPage
        searchParams={sp}
        filters={filters}
        products={products}
        total={total}
        url={`/search/${q}`}
      />
    </main>
  )
}
