import FeaturedCourses from '@/components/featured-courses'
// import FeaturedPortfolio from '@/components/featured-portfolio'
import FeaturedServices from '@/components/featured-services'
import HeroBio from '@/components/hero-bio'
import OurBrands from '@/components/our-brands'
import Testimonials from '@/components/testimonials'
import { STORE_URL } from '@/utils/const'
import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: STORE_URL
  }
}

export default function Home () {
  return (
    <main className='w-full [&>*:nth-child(odd)]:bg-gray-100'>
      <HeroBio />
      <OurBrands />
      {/* <FeaturedPortfolio /> */}
      <Testimonials />
      <FeaturedServices />
      <FeaturedCourses />
      {/* <HeroBanner />
      <FeaturedBrands />
      <OpeningHours />
      <FeaturedProducts />
      <StoreMap /> */}
    </main>
  )
}
