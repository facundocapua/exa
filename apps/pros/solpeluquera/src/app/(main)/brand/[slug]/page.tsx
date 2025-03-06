import { STORE_NAME } from '@/utils/const'
import { getBrand, getBrands, getFilteredProducts } from 'api'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Filters } from 'ui'
import AppliedFilters from 'ui/components/category/applied-filters'
import FiltersMobile from 'ui/components/category/filters-mobile'
import { Breadcrumb, ProductCard } from 'ui/server'

type Props = {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<Record<string, string>>
}

export async function generateStaticParams () {
  const brands = await getBrands()

  return brands.map((brand) => ({
    slug: brand.handle
  }))
}

export async function generateMetadata ({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const brand = await getBrand(slug)
  if (!brand) return {}

  return {
    title: `${brand.name} | ${STORE_NAME}`,
    description: 'Tienda de productos de belleza de marcas premium.',
    openGraph: {
      title: `${brand.name} | ${STORE_NAME}`,
      description: 'Tienda de productos de belleza de marcas premium.',
      type: 'website',
      locale: 'es_AR',
      siteName: 'eXa Pro',
      images: [
        {
          url: brand.logo,
          width: 630,
          height: 630,
          alt: brand.name
        }
      ]
    },
    twitter: {
      card: 'summary',
      creator: '@eXaBeautyOk',
      title: `${brand.name} | ${STORE_NAME}`,
      description: 'Tienda de productos de belleza de marcas premium.',
      site: '@eXaBeautyOk'
    }
    // alternates: {
    //   canonical: `https://exabeauty.com.ar/brand/${slug}`
    // }
  }
}

export default async function Brand ({ params, searchParams }: Props) {
  const { slug } = await params
  const brand = await getBrand(slug)

  if (!brand) {
    notFound()
  }

  const brecrumbs = []
  if (brand) {
    brecrumbs.push({
      name: brand.name,
      url: `/${brand.handle}`,
      current: true
    })
  }

  const sp = await searchParams
  const { filters, products, total } = await getFilteredProducts({
    restrinctions: { brand: slug },
    filters: sp,
    exclude: ['brand']
  })

  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={brecrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight text-neuborder-neutral-900">{brand.name}</h1>
      </div>

      <div className="pb-24 lg:pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
        {total > 0 && (
        <aside>
          <div className="hidden lg:block">
            <h2 className='text-xl mb-4'>Filtros</h2>
            <AppliedFilters url={`/brand/${slug}`} searchParams={sp} />
            <Filters filters={filters} />
          </div>

          <div className='block lg:hidden'>
            <FiltersMobile count={products.length} filters={filters} />
            <div className='pt-2'>
              <AppliedFilters url={`/brand/${slug}`} searchParams={sp} />
            </div>
          </div>
        </aside>
        )}

        <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
          {products.length === 0 && (<span>No se encontraron productos</span>)}

          <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:gap-x-8 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
