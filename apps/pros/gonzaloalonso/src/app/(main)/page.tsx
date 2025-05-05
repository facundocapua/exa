import FeaturedBrands from '@/components/FeaturedBrands'
import HeroBanner from '@/components/HeroBanner'
import OpeningHours from '@/components/OpeningHours'
import StoreMap from '@/components/StoreMap'
import { Suspense } from 'react'
import { BrandFeaturedSkeleton } from 'ui/components/brand-featured-list/brand-featured-skeleton'
import { STORE_URL } from '@/utils/const'
import { Metadata } from 'next'

import StoreMetadata from '@/components/store-metadata'
import { getSalon } from 'api'

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
      <Suspense fallback={<BrandFeaturedSkeleton containerClassname='bg-black' title='Marcas que utilizamos' />}>
        <FeaturedBrands />
      </Suspense>
      <OpeningHours />
      <StoreMap />
      <StoreMetadata salon={salon} />
    </main>
  )
}
