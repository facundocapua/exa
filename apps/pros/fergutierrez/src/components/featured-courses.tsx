import course1 from '@public/courses/1.jpg'
import course2 from '@public/courses/2.jpg'
import Image from 'next/image'
import Button from './button'
import Paragraph from './paragraph'

const images = [
  course1,
  course2
]

export default function FeaturedCourses () {
  return (
    <section className="pb-8 md:pt-8">
      <div className="flex justify-center items-center gap-12 max-w-6xl mx-auto lg:flex-row flex-col">
        <div className="text-left md:w-1/2 px-4 md:px-0 md:ml-10 order-2 md:order-1">
          <h1 className="text-3xl text-gray-700 font-extralight mb-8">Clases</h1>

          <Paragraph>Las clases pueden ser presenciales u online.</Paragraph>
          <Paragraph>Podes tomar la cantidad que quieras y ver los temas que vos elijas según tu necesidad.</Paragraph>
          <Paragraph>Si querés aprender a hacerte un maquillaje básico, de tendencia o simplemente tener asesoramiento profesional.</Paragraph>

          <Button link='/clases'>Más info</Button>
        </div>
        <div className="w-full sm:w-4/6 md:w-1/2 grid grid-cols-2 gap-4 order-1 md:order-2">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden">
              <Image className="h-full" alt='Automaquillaje' src={image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
