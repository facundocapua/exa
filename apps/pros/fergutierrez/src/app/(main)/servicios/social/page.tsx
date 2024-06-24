import SectionTitle from '@/components/section-title'
import SocialMakeup from '@/components/service/social-makeup'
import { Breadcrumb } from 'ui/server'

export default function ServicesSocial () {
  const pages = [
    { name: 'Servicios', url: '/servicios' },
    { name: 'Maquillaje Social', url: '/servicios/social', current: true }
  ]
  return (
    <>
      <div className='max-w-7xl mx-auto mb-4'>
        <Breadcrumb pages={pages} />
      </div>
      <SectionTitle>Maquillaje Social</SectionTitle>
      <SocialMakeup />
    </>
  )
}
