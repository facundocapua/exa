import FeaturedBrands from '@/components/featured-brands'
import FeaturedProducts from '@/components/featured-products'
import HeroBanner from '@/components/hero-banner'
import OpeningHours from '@/components/opening-hours'
import StoreMap from '@/components/store-map'
import { Suspense } from 'react'
import { ProductSliderSkeleton } from 'ui/components/product-slider/product-slider-skeleton'
import { BrandFeaturedSkeleton } from 'ui/components/brand-featured-list/brand-featured-skeleton'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'
import { getSalon } from 'api'
import StoreMetadata from '@/components/store-metadata'
import Testimonials from '@/components/testimonials'

export const metadata: Metadata = {
  alternates: {
    canonical: STORE_URL
  }
}

export default async function Home () {
  const salonId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!salonId) return null

  const salon = await getSalon(salonId)
  if (!salon) return null

  return (
    <main>
      <HeroBanner />
      <Suspense fallback={<BrandFeaturedSkeleton title='Nuestras Marcas' />}>
        <FeaturedBrands title='Nuestras Marcas' />
      </Suspense>
      <OpeningHours />
      <Suspense fallback={<ProductSliderSkeleton title='Destacados del mes' />}>
        <FeaturedProducts />
      </Suspense>
      <Testimonials />
      <StoreMap />
      <StoreMetadata salon={salon} />
    </main>
  )
}
