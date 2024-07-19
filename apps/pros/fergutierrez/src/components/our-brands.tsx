import Image from 'next/image'
import FeaturedTitle from './featured-title'
import { BRANDS } from '@/data/brands'

export default function OurBrands () {
  return (
    <section className="py-8">
      <FeaturedTitle>Marcas que utilizamos</FeaturedTitle>
      <div className="grid grid-cols-2 gap-12 items-center place-items-center px-4 w-full lg:grid-cols-3 xl:flex-wrap xl:px-0 xl:flex xl:justify-evenly">
        {BRANDS.map(({ name, image }) => (
          <Image key={name} title={name} alt={name} src={image} className="w-full lg:w-48" />
        ))}
      </div>
    </section>
  )
}
