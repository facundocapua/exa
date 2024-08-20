import firstImg from '@public/htbar/1.webp'
import secondImg from '@public/htbar/2.webp'
import thirdImg from '@public/htbar/3.webp'
import fourthImg from '@public/htbar/4.webp'
import fifthImg from '@public/htbar/5.webp'
import sixthImg from '@public/htbar/6.webp'
import { Breadcrumb } from 'ui/server'
import Image from 'next/image'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'
import SectionTitle from '@/components/section-title'

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/htbar`
  }
}

export default function ServicesPage () {
  const breadcrumbs = [
    {
      name: 'Hair Tatoo Bar',
      url: '/htbar',
      current: true
    }
  ]

  const images = [
    {
      image: firstImg
    },
    {
      image: secondImg
    },
    {
      image: thirdImg
    },
    {
      image: fourthImg
    },
    {
      image: fifthImg
    },
    {
      image: sixthImg
    }
  ]

  return (
    <section className="mx-auto max-w-2xl lg:max-w-7xl">
      <Breadcrumb pages={breadcrumbs} />

      <SectionTitle>Hair Tatoo Bar</SectionTitle>

      <p className='text-primary-700 pt-2 text-lg'>
        ¡Bienvenidos al innovador “Hair Tattoo Bar”! Después de meses de búsqueda y estudio incansable, hemos materializado una idea única que no encontrarás en ningún otro lugar. Inspirado por una visión amorfa y caótica que finalmente tomó forma clara y ordenada, “HT Bar” es el primer bar de Hair Tattoo para tus eventos. Ofrecemos un nuevo concepto para tus fiestas, donde pintamos tu cabello con diseños únicos y temporales que se van con el agua.
      </p>
      <p className='text-primary-700 pt-2 text-lg'>
        Tu cabello se convierte en el lienzo de nuestra creatividad, permitiéndote experimentar con estilos y diseños sin compromiso. Desde patrones vibrantes hasta arte capilar sofisticado, nuestro servicio temporal te permite transformar tu look para cualquier ocasión especial. Si quieres saber más sobre “HT Bar” y cómo podemos hacer que tu evento sea inolvidable, no dudes en contactarte.
      </p>

      <section className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto my-12'>
        {images.map((image, index) => (
          <article
          key={index}
          className='relative overflow-hidden animate-[appear_linear_both] [animation-timeline:view()] [animation-range:entry_20%_cover_40%] md:animate-none'
        >
            <Image
              src={image.image}
              alt='Hair Tatoo Bar'
              className='object-cover h-full aspect-[9/16] md:blur-sm transition-all ease-in-out duration-500 hover:blur-none hover:scale-110'
            />
          </article>
        ))}
      </section>
    </section>

  )
}
