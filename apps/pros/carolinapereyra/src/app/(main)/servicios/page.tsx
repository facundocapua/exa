import Services from '@/components/services/services'
import blondeImg from '@public/services/1-blonde.webp'
import colorTechniqueImg from '@public/services/2-color-technique.webp'
import cutImg from '@public/services/3-cut.webp'
import styleImg from '@public/services/4-style.webp'
import colorImg from '@public/services/5-color.webp'
import massageImg from '@public/services/6-massage.webp'
import adviceImg from '@public/services/7-advice.webp'
import treatmentImg from '@public/services/8-treatments.webp'
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
      name: 'Rubios',
      image: blondeImg
    },
    {
      name: 'Técnicas de Color',
      image: colorTechniqueImg
    },

    {
      name: 'Cortes',
      image: cutImg
    },
    {
      name: 'Peinados',
      image: styleImg
    },
    {
      name: 'Color',
      image: colorImg
    },
    {
      name: 'Masajes Capilares',
      image: massageImg
    },
    {
      name: 'Asesoría y Diagnóstico',
      image: adviceImg
    },
    {
      name: 'Tratamientos',
      image: treatmentImg
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
