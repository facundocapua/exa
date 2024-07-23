import { SERVICES } from '@/data/services'
import ServiceCard from './service-card'

export default function Services () {
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto my-12'>
      {SERVICES.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </section>
  )
}
