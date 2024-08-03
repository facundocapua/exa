import FeaturedBannersBig from '@/components/featured-banners-big'
import FeaturedBrands from '@/components/FeaturedBrands'
import FeaturedProducts from '@/components/FeaturedProducts'
import FeaturedProducts2 from '@/components/FeaturedProducts2'
import MainSlider from '@/components/MainSlider'
import StoresBanner from '@/components/stores/StoresBanner'
import { Suspense } from 'react'
import { HeroSliderSkeleton } from 'ui/components/hero-slider/hero-slider-skeleton'
import { FeaturedBannersBigSkeleton } from 'ui/components/banners/featured-banners-big-skeleton'
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
    <div>
      <h1 className='hidden'>eXa Beauty Store</h1>
      <Suspense fallback={<HeroSliderSkeleton />}>
        <MainSlider />
      </Suspense>
      <Suspense fallback={<FeaturedBannersBigSkeleton />}>
        <FeaturedBannersBig />
      </Suspense>
      <Suspense fallback={<ProductSliderSkeleton title='Destacados del mes' />}>
        <FeaturedProducts />
      </Suspense>

      <Suspense fallback={<BrandFeaturedSkeleton />}>
        <FeaturedBrands />
      </Suspense>

      <Suspense fallback={<ProductSliderSkeleton title='Descubrí lo Nuevo' />}>
        <FeaturedProducts2 />
      </Suspense>

      <StoresBanner />
    </div>
  )
}
