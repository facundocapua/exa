import FeaturedBrands from '@/components/featured-brands'
import FeaturedProducts from '@/components/featured-products'
import HeroBanner from '@/components/hero-banner'
import OpeningHours from '@/components/opening-hours'
import StoreMap from '@/components/store-map'
import { Suspense } from 'react'
import { ProductSliderSkeleton } from 'ui/components/product-slider/product-slider-skeleton'
import { BrandFeaturedSkeleton } from 'ui/components/brand-featured-list/brand-featured-skeleton'

export default function Home () {
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
      <StoreMap />
    </main>
  )
}
