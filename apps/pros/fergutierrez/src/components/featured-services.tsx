import Button from './button'
import service1 from '@public/services/1.jpg'
import service2 from '@public/services/2.jpg'
import service3 from '@public/services/3.jpg'
import service4 from '@public/services/4.jpg'
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
    <section className="py-8">
      <div className="flex justify-center items-center gap-12 max-w-6xl mx-auto lg:flex-row flex-col">
        <div className="w-full sm:w-4/6 md:w-1/2 grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <Image className="w-full" alt='Servicios' src={image} />
            </div>
          ))}
        </div>
        <div className="text-left md:w-1/2">
          <h1 className="text-3xl text-black font-extralight mb-8">Servicios</h1>

          <Paragraph>Los servicios pueden ser en el estudio o a domicilio. Tienen distintos honorarios.</Paragraph>
          <Paragraph>En el caso del servicio de maquillaje para eventos, se deben señar 15 días antes, para reservar el turno.</Paragraph>
          <Paragraph>En el caso de novias y madrinas 1 mes antes como mínimo.</Paragraph>

          <Button link="/servicios">Más info</Button>
        </div>
      </div>
    </section>
  )
}
