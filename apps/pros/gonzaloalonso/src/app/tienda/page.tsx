import { getFilteredProducts } from 'api'
import { ProductListPage } from 'ui/server'

type Props = {
  searchParams: Record<string, string>
}

export default async function Category ({ searchParams }: Props) {
  const { filters, products, total } = await getFilteredProducts({
    filters: searchParams
  })

  const brecrumbs = [
    {
      name: 'Tienda',
      url: '/tienda',
      current: true
    }
  ]

  return (
    <ProductListPage
      brecrumbs={brecrumbs}
      searchParams={searchParams}
      filters={filters}
      products={products}
      total={total}
      title="Tienda"
      url="/tienda"
    />
  )
}
