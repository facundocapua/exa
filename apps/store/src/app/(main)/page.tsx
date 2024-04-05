import FeaturedBanners from '@/components/FeaturedBanners'
import FeaturedBrands from '@/components/FeaturedBrands'
// import FeaturedCategories from '@/components/FeaturedCategories'
import FeaturedProducts from '@/components/FeaturedProducts'
import FeaturedProducts2 from '@/components/FeaturedProducts2'
import MainSlider from '@/components/MainSlider'
import StoresBanner from '@/components/stores/StoresBanner'
import { Suspense } from 'react'

export default function Home () {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MainSlider />
        <FeaturedBanners />
        <FeaturedProducts />
        {/* <FeaturedCategories /> */}
        <FeaturedBrands />
        <FeaturedProducts2 />
        <StoresBanner />
      </Suspense>
    </div>
  )
}
