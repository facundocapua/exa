import FeaturedBanners from '@/components/FeaturedBanners'
import FeaturedCategories from '@/components/FeaturedCategories'
import FeaturedProducts from '@/components/FeaturedProducts'
import MainSlider from '@/components/MainSlider'

export default function Home () {
  return (
    <main>
      <MainSlider />
      <FeaturedBanners />
      <FeaturedProducts />
      <FeaturedCategories />
    </main>
  )
}
