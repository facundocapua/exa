import ProfilePic from '@public/about-me/main-new.jpg'
import ProfilePic2 from '@public/about-me/main.webp'
import Image from 'next/image'
import { ReactNode } from 'react'

const Text = ({ children }: {children: ReactNode}) => {
  return (
    <p className='text-lg my-4 text-gray-600'>
      {children}
    </p>
  )
}

export default function HeroBio () {
  return (
    <section className="w-full pb-8 md:pt-8">
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
        <div className='relative h-[500px] overflow-hidden'>
          <Image src={ProfilePic} alt='Fernanda Gutierrez' fill className='object-cover object-[50%_70%]' />
        </div>
        {/* <div className='h-[750px] w-[600px]' style={{
          // backgroundImage: `url()`,
          background: `radial-gradient(circle, transparent 66%, #F3F4F6 68%), url(${ProfilePic2.src})`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover'
        }}></div> */}
        {/* <div className='relative h-[650px] overflow-hidden'>
          <Image src={ProfilePic2} alt='Fernanda Gutierrez' layout='fill' className='object-cover object-[50%_0]' />
        </div> */}
        <article className='px-4 md:px-0'>
          <h1 className='text-4xl'>Soy Fernanda Gutiérrez</h1>
          <Text>
            Maquilladora profesional, con mas de 22 años de experiencia. Maquillo para todo tipo de eventos, dicto cursos de
            perfeccionamiento y clases de automaquillaje.
          </Text>
          <Text>
            Tengo un estilo natural, que se ve reflejado en mis trabajos, apasionada de las tendencias, las adapto buscando resaltar lo mejor de mis clientas.
          </Text>
          <Text>
            Me gusta estar actualizada, por ello constantemente me perfecciono en distintas técnicas para lograr trabajos de excelencia.
          </Text>
          <Text>
            Actualmente vivo en Tandil donde tengo mi estudio y brindo todos mis servicios.
          </Text>
        </article>
      </div>
    </section>
  )
}
