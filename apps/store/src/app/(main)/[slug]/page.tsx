import Breadcrumb from '@/components/Breadcrumb'
import AppliedFilters from '@/components/category/AppliedFilters'
import Filters from '@/components/category/Filters'
import { getCategories, getCategory, getFilteredProducts } from 'api'
import { notFound } from 'next/navigation'
import { ProductCard } from 'ui/server'

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
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-12">
      <Breadcrumb pages={brecrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300">
        <h1 className="text-4xl font-bold tracking-tight text-neuborder-neutral-900">{category.name}</h1>
      </div>

      <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        {total > 0 && (
        <aside>
          <h2 className='text-xl mb-4'>Filtros</h2>
          <div className="hidden lg:block">
            <AppliedFilters url={`/${slug}`} searchParams={searchParams} />
            <Filters filters={filters} />
          </div>
        </aside>
        )}

        <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
          <h2 id="product-heading" className="sr-only">
            Products
          </h2>

          {products.length === 0 && (<span>No se encontraron productos</span>)}

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.sku} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
