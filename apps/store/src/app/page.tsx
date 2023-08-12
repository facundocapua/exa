import FeaturedBanners from '@/components/FeaturedBanners'
import FeaturedProducts from '@/components/FeaturedProducts'
import MainSlider from '@/components/MainSlider'

export default function Home () {
  return (
    <main>
      <MainSlider />
      <FeaturedBanners />
      <FeaturedProducts />
    </main>
  )
}
