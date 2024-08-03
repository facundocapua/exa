import SectionTitle from '@/components/section-title'
import BrideMakeup from '@/components/service/bride-makeup'
import { STORE_URL } from '@/utils/const'
import { Metadata } from 'next'
import { Breadcrumb } from 'ui/server'

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/servicios/novias`
  }
}

export default function ServicesBrideMakeup () {
  const pages = [
    { name: 'Servicios', url: '/servicios' },
    { name: 'Maquillaje Novias', url: '/servicios/novias', current: true }
  ]
  return (
    <>
      <div className='max-w-7xl mx-auto mb-4'>
        <Breadcrumb pages={pages} />
      </div>
      <SectionTitle>Maquillaje Novias</SectionTitle>
      <BrideMakeup />
    </>
  )
}
