import FeaturedBrands from '@/components/FeaturedBrands'
import FeaturedProducts from '@/components/FeaturedProducts'
import HeroBanner from '@/components/HeroBanner'
import OpeningHours from '@/components/OpeningHours'
import StoreMap from '@/components/StoreMap'
import { Suspense } from 'react'
import { ProductSliderSkeleton } from 'ui/components/product-slider/product-slider-skeleton'
import { BrandFeaturedSkeleton } from 'ui/components/brand-featured-list/brand-featured-skeleton'
import { STORE_URL } from '@/utils/const'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: STORE_URL
  }
}

export default function Home () {
  return (
    <main>
      <HeroBanner />
      <Suspense fallback={<BrandFeaturedSkeleton containerClassname='bg-black' title='Marcas que utilizamos' />}>
        <FeaturedBrands />
      </Suspense>
      <OpeningHours />
      <Suspense fallback={<ProductSliderSkeleton title='Destacados del mes' />}>
        <FeaturedProducts />
      </Suspense>
      <StoreMap />
    </main>
  )
}
