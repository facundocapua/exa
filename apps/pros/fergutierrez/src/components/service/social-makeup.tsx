import { SOCIAL_MAKEUP_SERVICES } from '@/data/services'
import { getSalon } from 'api'
import MakeupCardBig from './makeup-card-big'
import MakeupCard from './makeup-card'
import { generateWhatsAppLink } from 'utils'

export default async function SocialMakeup () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!storeId) return null

  const store = await getSalon(storeId)
  if (!store || !store.social_networks) return null

  const { whatsapp } = store.social_networks

  return (
    <section className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-12">
        {SOCIAL_MAKEUP_SERVICES.map((service, index) => (
          <MakeupCardBig
            key={index}
            align={index % 2 === 0 ? 'left' : 'right'}
            {...service}
            link={generateWhatsAppLink(whatsapp!, service.message)}
          />
        ))}
      </div>
      <hr className='my-12' />
      <div className="grid grid-cols-1 lg:max-w-none mx-auto lg:grid-cols-3 gap-8">
        {SOCIAL_MAKEUP_SERVICES.map((service, index) => (
          <MakeupCard key={index} {...service} link={generateWhatsAppLink(whatsapp!, service.message)} />
        ))}
      </div>
    </section>
  )
}
