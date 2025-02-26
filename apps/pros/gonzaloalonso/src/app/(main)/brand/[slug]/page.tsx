import SectionTitle from '@/components/section-title'
import { STORE_NAME, STORE_URL } from '@/utils/const'
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
    },
    alternates: {
      canonical: `${STORE_URL}/brand/${slug}`
    }
  }
}

export default async function Brand ({ params, searchParams }: Props) {
  const { slug } = await params
  const brand = await getBrand(slug)

  if (!brand) {
    notFound()
  }

  const breadcrumbs = [
    {
      name: 'Tienda',
      url: '/tienda',
      current: false
    }
  ]

  if (brand) {
    breadcrumbs.push({
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
    <main className="w-full px-4 mb-4 mt-4">
      <div className='max-w-7xl mx-auto mb-4'>
        <Breadcrumb pages={breadcrumbs} />
      </div>

      <SectionTitle>Tienda</SectionTitle>

      <div className="pb-24 lg:pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4 max-w-7xl mx-auto">
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
    </main>
  )
}
