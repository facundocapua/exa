import { STORE_NAME, STORE_OG_IMAGE } from '@/utils/const'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { HeroSliderSkeleton } from 'ui/components/hero-slider/hero-slider-skeleton'
import { ProductSliderSkeleton } from 'ui/components/product-slider/product-slider-skeleton'
import { BrandFeaturedBlock } from 'ui/components/brand-featured-block/brand-featured-block'
import { BrandFeaturedBlockSkeleton } from 'ui/components/brand-featured-block/brand-featured-block-skeleton'
import { StoreMainSlider } from 'ui/components/pros/store-main-slider'
import FeaturedProducts from '@/components/featured-products'
import { StoreNavigation } from 'ui/components/pros/store-navigation'
import { getSalon } from 'api'

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

export default async function StorePage () {
  const salonId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  const salon = await getSalon(salonId)
  if (!salon) return null

  const categoryHandlers = [
    'rostro',
    'ojos',
    'labios',
    'esponjas'
  ]

  return (
    <main className="w-full px-4 mb-4 mt-4">
      <div className='mx-auto'>
        <StoreNavigation categoryHandlers={categoryHandlers} />
        <Suspense fallback={<HeroSliderSkeleton />}>
          <StoreMainSlider salonId={salonId} />
        </Suspense>
        { salon.featured_brand && (
          <Suspense fallback={<BrandFeaturedBlockSkeleton />}>
            <BrandFeaturedBlock handle={salon.featured_brand.handle} hideBannerMobile={true} />
          </Suspense>
        )}
        <Suspense fallback={<ProductSliderSkeleton title='Mis favoritos' />}>
          <FeaturedProducts />
        </Suspense>
      </div>
    </main>
  )
}
