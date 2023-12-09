import clinique from '@public/brands/clinique.svg'
import dior from '@public/brands/dior.svg'
import lancome from '@public/brands/lancome.svg'
import loreal from '@public/brands/loreal.svg'
import mac from '@public/brands/mac.png'
import maybelline from '@public/brands/maybelline.svg'
import Image from 'next/image'
import FeaturedTitle from './featured-title'

const BRANDS = [
  {
    name: 'Clinique',
    image: clinique
  },
  {
    name: 'Dior',
    image: dior
  },
  {
    name: 'Lancome',
    image: lancome
  },
  {
    name: 'Loreal',
    image: loreal
  },
  {
    name: 'MAC',
    image: mac
  },
  {
    name: 'Maybelline',
    image: maybelline
  }
]

export default function OurBrands () {
  return (
    <section className="py-8">
      <FeaturedTitle>Marcas que utilizamos</FeaturedTitle>
      <div className="grid grid-cols-2 gap-12 items-center px-4 lg:px-0 lg:flex lg:justify-evenly">
        {BRANDS.map(({ name, image }) => (
          <Image key={name} title={name} alt={name} src={image} className="w-full lg:w-48" />
        ))}
      </div>
    </section>
  )
}
