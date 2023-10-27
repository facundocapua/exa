import { HeroSlider } from 'ui'

export default function MainSlider () {
  const slides = [
    {
      image: 'https://mtelzvckwsdkcqbvwewx.supabase.co/storage/v1/object/public/assets/banners/Banner3.png',
      imageMobile: 'https://via.placeholder.com/780x546',
      link: '#'
    },
    {
      image: 'https://mtelzvckwsdkcqbvwewx.supabase.co/storage/v1/object/public/assets/banners/Banner2.png',
      imageMobile: 'https://via.placeholder.com/780x546',
      link: '/product/planchita-iht-x-wide-digital'
    }
  ]

  return (
    <div>
      <HeroSlider slides={slides} />
    </div>
  )
}
