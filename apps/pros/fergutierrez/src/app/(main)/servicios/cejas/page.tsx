import SectionTitle from '@/components/section-title'
import { Breadcrumb } from 'ui/server'
import EyebrownsDesign from '@/components/service/eyebrowns-design'

export default function EyebrownsPage () {
  const pages = [
    { name: 'Servicios', url: '/servicios' },
    { name: 'Cejas', url: '/servicios/cejas', current: true }
  ]
  return (
    <>
      <div className='max-w-7xl mx-auto mb-4'>
        <Breadcrumb pages={pages} />
      </div>
      <SectionTitle>Diseño de cejas</SectionTitle>
      <EyebrownsDesign />
    </>
  )
}
