import FeaturedBannersBig from '@/components/featured-banners-big'
import FeaturedBrands from '@/components/FeaturedBrands'
// import FeaturedCategories from '@/components/FeaturedCategories'
import FeaturedProducts from '@/components/FeaturedProducts'
import FeaturedProducts2 from '@/components/FeaturedProducts2'
import MainSlider from '@/components/MainSlider'
import StoresBanner from '@/components/stores/StoresBanner'
import { Suspense } from 'react'
import { HeroSliderSkeleton } from 'ui/components/hero-slider/hero-slider-skeleton'
import { FeaturedBannersBigSkeleton } from 'ui/components/banners/featured-banners-big-skeleton'
import { ProductSliderSkeleton } from 'ui/components/product-slider/product-slider-skeleton'
import { Metadata } from 'next'

export default function Home () {
  return (
    <div>
      <Suspense fallback={<HeroSliderSkeleton />}>
        <MainSlider />
      </Suspense>
      {/* <Suspense fallback={<FeaturedBannersSkeleton />}>
        <FeaturedBanners />
      </Suspense> */}
      <Suspense fallback={<FeaturedBannersBigSkeleton />}>
        <FeaturedBannersBig />
      </Suspense>
      <Suspense fallback={<ProductSliderSkeleton title='Destacados del mes' />}>
        <FeaturedProducts />
      </Suspense>

      {/* <FeaturedCategories /> */}

      <FeaturedBrands />

      <Suspense fallback={<ProductSliderSkeleton title='Descubrí lo Nuevo' />}>
        <FeaturedProducts2 />
      </Suspense>
      <StoresBanner />
    </div>
  )
}
