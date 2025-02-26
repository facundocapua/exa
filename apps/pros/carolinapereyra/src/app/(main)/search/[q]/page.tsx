import SectionTitle from '@/components/section-title'
import { getFilteredSearchProducts, getSalon } from 'api'
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

  const salonId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  const salon = await getSalon(salonId)
  const sp = await searchParams
  const { filters, products, total } = await getFilteredSearchProducts({
    q,
    filters: sp,
    salesChannelId: salon?.sales_channel_id,
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
