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
    <section className="py-8">
      <div className="flex justify-center items-center gap-12 max-w-6xl mx-auto lg:flex-row flex-col">
        <div className="text-left md:w-1/2 ml-10">
          <h1 className="text-3xl text-gray-700 font-extralight mb-8">Automaquillaje</h1>

          <Paragraph>Los cursos y las clases pueden ser presenciales u online.</Paragraph>
          <Paragraph>Podes tomar la cantidad de clases que quieras y ver los temas que vos elijas.</Paragraph>
          <Paragraph>Si querés aprender a hacerte un maquillaje de tendencia o simplemente tener asesoramiento profesional.</Paragraph>

          <Button link='/automaquillaje'>Más info</Button>
        </div>
        <div className="w-full sm:w-4/6 md:w-1/2 grid grid-cols-2 gap-4">
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
