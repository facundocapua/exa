import Services from '@/components/services/services'
import colorImg from '@public/services/color.webp'
import fantasyImg from '@public/services/fantasy.webp'
import cutImg from '@public/services/cut.webp'
import treatmentImg from '@public/services/treatment.webp'
import styleImg from '@public/services/hairstyle.webp'
import { Breadcrumb } from 'ui/server'
import Title from '@/components/title'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/servicios`
  }
}

export default function ServicesPage () {
  const breadcrumbs = [
    {
      name: 'Servicios',
      url: '/servicios',
      current: true
    }
  ]

  const services = [
    {
      name: 'Color',
      image: colorImg
    },
    {
      name: 'Fantasía',
      image: fantasyImg
    },

    {
      name: 'Corte',
      image: cutImg
    },
    {
      name: 'Tratamientos',
      image: treatmentImg
    },
    {
      name: 'Peinados',
      image: styleImg
    }
  ]

  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <Title>Servicios</Title>

      <Services services={services} />
    </section>

  )
}
