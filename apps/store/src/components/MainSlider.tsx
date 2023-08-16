import { HeroSlider } from 'ui'

export default function MainSlider () {
  const slides = [
    {
      image: 'https://via.placeholder.com/2500x600',
      imageMobile: 'https://via.placeholder.com/780x546'
    },
    {
      image: 'https://via.placeholder.com/2500x600',
      imageMobile: 'https://via.placeholder.com/780x546'
    },
    {
      image: 'https://via.placeholder.com/2500x600',
      imageMobile: 'https://via.placeholder.com/780x546'
    },
    {
      image: 'https://via.placeholder.com/2500x600',
      imageMobile: 'https://via.placeholder.com/780x546'
    }
  ]

  return (
    <div>
      <HeroSlider slides={slides} />
    </div>
  )
}
