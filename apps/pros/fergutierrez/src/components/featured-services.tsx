import Button from './button'
import service1 from '@public/services/1.jpg'
import service2 from '@public/services/2.jpg'
import service3 from '@public/services/social/2.jpg'
import service4 from '@public/services/3.jpg'
import Image from 'next/image'
import Paragraph from './paragraph'

const images = [
  service1,
  service2,
  service3,
  service4
]

export default function FeaturedServices () {
  return (
    <section className="pb-8 pt-0 md:pt-8">
      <div className="flex justify-center items-center gap-12 max-w-6xl mx-auto lg:flex-row flex-col">
        <div className="w-full sm:w-4/6 md:w-1/2 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <Image className="w-full" alt='Servicios' src={image} />
            </div>
          ))}
        </div>
        <div className="px-4 md:px-0 text-left md:w-1/2">
          <h1 className="text-3xl text-black font-extralight mb-8">Servicios</h1>

          <Paragraph>Los servicios pueden ser en el estudio o a domicilio. Tienen distintos honorarios.</Paragraph>
          <Paragraph>Para reservar el turno de servicio de maquillaje se debe realizar una seña del 50%.</Paragraph>
          <Paragraph>De esta manera queda el lugar reservado.</Paragraph>

          <Button link="/servicios">Más info</Button>
        </div>
      </div>
    </section>
  )
}
