import Services from '@/components/Services/Services'
import blondeImg from '@public/services/blonde.jpg'
import haistyleImg from '@public/services/hairstyle.jpg'
import creativeImg from '@public/services/highlights.jpg'
import colorImg from '@public/services/color.jpg'
import cutImg from '@public/services/cut.jpg'
import therapyImg from '@public/services/therapy.png'
import { Breadcrumb } from 'ui/server'

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
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight border-neutral-900">Servicios</h1>
      </div>

      <Services services={services} />
    </section>

  )
}
