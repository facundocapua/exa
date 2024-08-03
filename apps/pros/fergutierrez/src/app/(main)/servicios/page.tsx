import SectionTitle from '@/components/section-title'
import OurSecret from '@/components/service/our-secret'
import Services from '@/components/service/services'
import { STORE_URL } from '@/utils/const'
import { Metadata } from 'next'
import { Breadcrumb } from 'ui/server'

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/servicios`
  }
}

export default function ServicesPage () {
  const pages = [
    { name: 'Servicios', url: '/servicios', current: true }
  ]

  return (
    <>
      <div className='max-w-7xl mx-auto mb-4'>
        <Breadcrumb pages={pages} />
      </div>
      <SectionTitle>Servicios</SectionTitle>
      <Services />
      <OurSecret />
    </>
  )
}
