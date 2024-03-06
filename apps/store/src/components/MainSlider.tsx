import { getFeaturedSlides } from 'api'
import { HeroSlider } from 'ui'

export default async function MainSlider () {
  const slides = await getFeaturedSlides()

  return (
    <div>
      <HeroSlider slides={slides} />
    </div>
  )
}
