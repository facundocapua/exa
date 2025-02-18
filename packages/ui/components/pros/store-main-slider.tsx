import type { Slide } from 'api'
import { getFeaturedSlides } from 'api'
import HeroSlider from '../hero-slider/hero-slider'
import HeroSlide from '../hero-slider/hero-slide'

type Props = {
  salonId: string
}

export const StoreMainSlider = async ({ salonId }: Props) => {
  const slides = await getFeaturedSlides(salonId)

  return (
    <div>
      {slides.length === 1 ? (<HeroSlide slide={slides[0] as Slide} priority={true} />) : (<HeroSlider slides={slides} />)}
    </div>
  )
}

export default StoreMainSlider
