import Services from '@/components/Services'
import balayageImg from '../../../public/portfolio/portfolio-3.jpg'
import cutImg from '../../../public/portfolio/portfolio-6.jpg'
import colorImg from '../../../public/portfolio/portfolio-1.jpg'

export default function ServicesPage () {
  const services = [
    {
      name: 'Balayage',
      image: balayageImg
    },
    {
      name: 'Corte',
      image: cutImg
    },
    {
      name: 'Color',
      image: colorImg
    }
  ]

  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl mb-4">
      <div className="pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight border-neutral-900">Servicios</h1>
      </div>

      <Services services={services} />
    </div>

  )
}
