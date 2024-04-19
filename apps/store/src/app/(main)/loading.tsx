import { HeroSliderSkeleton } from 'ui/components/hero-slider/hero-slider-skeleton'
import { FeaturedBannersBigSkeleton } from 'ui/components/banners/featured-banners-big-skeleton'
import { ProductSliderSkeleton } from 'ui/components/product-slider/product-slider-skeleton'
import { BrandFeaturedSkeleton } from 'ui/components/brand-featured-list/brand-featured-skeleton'
import StoresBanner from '@/components/stores/StoresBanner'

export default function LoadingHomepage () {
  return (
    <div>
      <HeroSliderSkeleton />
      <FeaturedBannersBigSkeleton />
      <ProductSliderSkeleton title='Destacados del mes' />
      <BrandFeaturedSkeleton />
      <ProductSliderSkeleton title='Descubrí lo Nuevo' />
      <StoresBanner />
    </div>
  )
}
