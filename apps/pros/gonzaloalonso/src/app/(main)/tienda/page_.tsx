import SectionTitle from '@/components/section-title'
import { STORE_NAME, STORE_OG_IMAGE } from '@/utils/const'
import { getFilteredProducts, getSalon } from 'api'
import { Metadata } from 'next'
import { Breadcrumb, ProductListPage } from 'ui/server'
import { cleanFilters } from 'utils'

type Props = {
  searchParams: Record<string, string>
}

export async function generateMetadata (): Promise<Metadata> {
  return {
    title: `Tienda | ${STORE_NAME}`,
    description: 'Tienda de productos de belleza de marcas premium.',
    openGraph: {
      title: `Tienda | ${STORE_NAME}`,
      description: 'Tienda de productos de belleza de marcas premium.',
      type: 'website',
      locale: 'es_AR',
      siteName: 'eXa Pro',
      images: [
        {
          url: STORE_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: STORE_NAME
        }
      ]
    },
    twitter: {
      card: 'summary',
      creator: '@eXaBeautyOk',
      title: `Tienda | ${STORE_NAME}`,
      description: 'Tienda de productos de belleza de marcas premium.',
      site: '@eXaBeautyOk'
    }
  }
}

export default async function StorePage ({ searchParams }: Props) {
  const salonId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  const salon = await getSalon(salonId)
  const cleanedSearchParams = cleanFilters(await searchParams)
  const { filters, products, total } = await getFilteredProducts({
    filters: cleanedSearchParams,
    salesChannelId: salon?.sales_channel_id
  })

  const breadcrumbs = [
    {
      name: 'Tienda',
      url: '/tienda',
      current: true
    }
  ]

  return (
    <main className="w-full px-4 mb-4 mt-4">
      <div className='max-w-7xl mx-auto mb-4'>
        <Breadcrumb pages={breadcrumbs} />
      </div>

      <SectionTitle>Tienda</SectionTitle>

      <div className='max-w-7xl mx-auto'>
        <ProductListPage
          searchParams={cleanedSearchParams}
          filters={filters}
          products={products}
          total={total}
          url="/tienda"
        />
      </div>
    </main>
  )
}
