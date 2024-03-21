import FeaturedBrands from '@/components/FeaturedBrands'
import FeaturedProducts from '@/components/FeaturedProducts'
import HeroBanner from '@/components/HeroBanner'
import OpeningHours from '@/components/OpeningHours'
import StoreMap from '@/components/StoreMap'
import { Suspense } from 'react'

export default function Home () {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <HeroBanner />
        <FeaturedBrands />
        <OpeningHours />
        <FeaturedProducts />
        <StoreMap />
      </Suspense>
    </main>
  )
}
