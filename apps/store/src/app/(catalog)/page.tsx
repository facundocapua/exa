import FeaturedBanners from '@/components/FeaturedBanners'
import FeaturedBrands from '@/components/FeaturedBrands'
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
      <FeaturedBrands />
    </main>
  )
}
