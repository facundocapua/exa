import Services from '@/components/Services/Services'
import blondeImg from '@public/services/blonde.jpg'
import haistyleImg from '@public/services/hairstyle.jpg'
import creativeImg from '@public/services/highlights.jpg'
import colorImg from '@public/services/color.jpg'
import cutImg from '@public/services/cut.jpg'
import therapyImg from '@public/services/therapy.png'
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
      name: 'Peinado',
      image: haistyleImg
    },

    {
      name: 'Creative Highlights',
      image: creativeImg
    },
    {
      name: 'Color',
      image: colorImg
    },
    {
      name: 'Corte',
      image: cutImg
    },
    {
      name: 'Terapias',
      image: therapyImg
    }
  ]

  return (
    <main className="w-full px-4 mb-4 mt-4">
      <div className='max-w-7xl mx-auto mb-4'>
        <Breadcrumb pages={breadcrumbs} />
      </div>

      <SectionTitle>Servicios</SectionTitle>

      <Services services={services} />
    </main>

  )
}
