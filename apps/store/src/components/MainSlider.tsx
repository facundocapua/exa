import { HeroSlider } from 'ui'

export default function MainSlider () {
  const slides = [
    {
      image: 'https://via.placeholder.com/2500x600'
    },
    {
      image: 'https://via.placeholder.com/2500x600'
    },
    {
      image: 'https://via.placeholder.com/2500x600'
    },
    {
      image: 'https://via.placeholder.com/2500x600'
    }
  ]

  return (
    <div>
      <HeroSlider slides={slides} />
    </div>
  )
}
