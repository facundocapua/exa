import type { StaticImageData } from 'next/image'
import Image from 'next/image'

type Props = {
  services: Array<{
    name: string
    image: StaticImageData
  }>

}

export default function Services ({ services }: Props) {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto my-12'>
      {services.map((service) => (
        <article key={service.name} className='relative overflow-hidden'>
          <Image src={service.image} alt={service.name} className='object-cover h-full grayscale transition-all ease-in-out duration-500 hover:grayscale-0 hover:scale-110' />
          <h2 className='absolute w-full bottom-3 left-0 text-center font-semibold text-3xl bg-black/25 py-2'>{service.name}</h2>
        </article>
      ))}
    </section>
  )
}
