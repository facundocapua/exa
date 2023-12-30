import { SOCIAL_MAKEUP_SERVICES } from '@/data/services'
import { getStore } from 'api'
import MakeupCard from './makeup-card'
import { generateWhatsAppLink } from 'utils'

export default async function SocialMakeup () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!storeId) return null

  const store = await getStore(storeId)
  if (!store) return null

  const { whatsapp } = store.social_networks

  return (
    <section className="max-w-7xl mx-auto">
      <h2 className="text-2xl text-center mb-4">Elije tu maquillaje</h2>
      <div className="grid grid-cols-1 lg:max-w-none mx-auto lg:grid-cols-3 gap-8">
        {SOCIAL_MAKEUP_SERVICES.map((service, index) => (
          <MakeupCard key={index} {...service} link={generateWhatsAppLink(whatsapp, service.message)} />
        ))}
      </div>
    </section>
  )
}
