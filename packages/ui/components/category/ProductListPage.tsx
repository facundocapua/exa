import { Breadcrumb } from '../generic'
import { ProductCard } from '../product-card'
import AppliedFilters from './AppliedFilters'
import Filters from './Filters'

type Props = {
  breadcrumbs: {
    name: string
    url: string
    current: boolean
  }[]
  searchParams: Record<string, string>
  filters: any
  products: any[]
  total: number
  title: string
  url: string
}

export default function ProductListPage ({ breadcrumbs, searchParams, filters, products, total, title, url }: Props) {
  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight border-neutral-900">{title}</h1>
      </div>

      <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        {total > 0 && (
        <aside>
          <h2 className='text-xl mb-4'>Filtros</h2>
          <div className="hidden lg:block">
            <AppliedFilters url={url} searchParams={searchParams} />
            <Filters filters={filters} />
          </div>
        </aside>
        )}

        <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
          <h2 id="product-heading" className="sr-only">
            Productos
          </h2>

          {products.length === 0 && (<span>No se encontraron productos</span>)}

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} loading={index <= 2 ? 'eager' : 'lazy'} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
