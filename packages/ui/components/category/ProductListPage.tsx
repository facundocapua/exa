import { ProductCard } from '../product-card'
import AppliedFilters from './applied-filters'
import Filters from './Filters'
import FiltersMobile from './filters-mobile'

type Props = {
  searchParams: Record<string, string>
  filters: any
  products: any[]
  total: number
  url: string
}

export default function ProductListPage ({ searchParams, filters, products, total, url }: Props) {
  return (
    <div className="pb-24 lg:pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
      {total > 0 && (
        <aside>
          <div className="hidden lg:block">
            <h2 className='text-xl mb-4'>Filtros</h2>
            <AppliedFilters url={url} searchParams={searchParams} />
            <Filters filters={filters} />
          </div>

          <div className='block lg:hidden'>
            <FiltersMobile count={products.length} filters={filters} />
            <div className='pt-2'>
              <AppliedFilters url={url} searchParams={searchParams} />
            </div>
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
  )
}
