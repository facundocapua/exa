import FeaturedBrands from '@/components/FeaturedBrands'
import FeaturedProducts from '@/components/FeaturedProducts'
import HeroBanner from '@/components/HeroBanner'

export default function Home () {
  return (
    <main>
      <HeroBanner />
      <FeaturedProducts />
      <FeaturedBrands />
    </main>
  )
}
