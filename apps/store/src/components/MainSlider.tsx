import { HeroSlider } from 'ui'

export default function MainSlider () {
  const slides = [
    {
      image: 'https://mtelzvckwsdkcqbvwewx.supabase.co/storage/v1/object/public/assets/banners/Banner1.png',
      imageMobile: 'https://via.placeholder.com/780x546',
      link: '/product/planchita-iht-x-wide-digital'
    },
    {
      image: 'https://via.placeholder.com/2500x600',
      imageMobile: 'https://via.placeholder.com/780x546',
      link: '#'
    }
  ]

  return (
    <div>
      <HeroSlider slides={slides} />
    </div>
  )
}
