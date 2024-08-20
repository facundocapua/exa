import Services from '@/components/services/services'
import colorImg from '@public/services/color.webp'
import fantasyImg from '@public/services/fantasy.webp'
import cutImg from '@public/services/cut.webp'
import treatmentImg from '@public/services/treatment.webp'
import styleImg from '@public/services/hairstyle.webp'
import { Breadcrumb } from 'ui/server'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'
import SectionTitle from '@/components/section-title'

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
    <section className="mx-auto max-w-7xl px-4 md:px-0">
      <Breadcrumb pages={breadcrumbs} />

      <SectionTitle>Servicios</SectionTitle>

      <Services services={services} />
    </section>

  )
}
