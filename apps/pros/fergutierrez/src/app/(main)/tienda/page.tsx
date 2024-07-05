import { STORE_NAME, STORE_OG_IMAGE } from '@/utils/const'
import { getFilteredProducts, getSalon } from 'api'
import { Metadata } from 'next'
import { ProductListPage } from 'ui/server'

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
  
  const { filters, products, total } = await getFilteredProducts({
    filters: searchParams,
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
    <ProductListPage
      breadcrumbs={breadcrumbs}
      searchParams={searchParams}
      filters={filters}
      products={products}
      total={total}
      title="Tienda"
      url="/tienda"
    />
  )
}
