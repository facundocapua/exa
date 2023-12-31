import FeaturedBrands from '@/components/FeaturedBrands'
import FeaturedProducts from '@/components/FeaturedProducts'
import HeroBanner from '@/components/HeroBanner'
import OpeningHours from '@/components/OpeningHours'
import StoreMap from '@/components/StoreMap'

export default function Home () {
  return (
    <main>
      <HeroBanner />
      <FeaturedBrands />
      <OpeningHours />
      <FeaturedProducts />
      <StoreMap />
    </main>
  )
}
