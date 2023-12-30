import SectionTitle from '@/components/section-title'
import BrideMakeup from '@/components/services/bride-makeup'
import { Breadcrumb } from 'ui/server'

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
