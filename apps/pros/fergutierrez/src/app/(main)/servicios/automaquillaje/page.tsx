import SectionTitle from '@/components/section-title'
import SelfMakeup from '@/components/service/self-makeup'
import { Breadcrumb } from 'ui/server'

export default function ServicesBrideMakeup () {
  const pages = [
    { name: 'Servicios', url: '/servicios' },
    { name: 'Clases Automaquillaje', url: '/servicios/automaquillaje', current: true }
  ]
  return (
    <>
      <div className='max-w-7xl mx-auto mb-4'>
        <Breadcrumb pages={pages} />
      </div>
      <SectionTitle>Clases Automaquillaje</SectionTitle>
      <SelfMakeup />
    </>
  )
}
