import { MapPinIcon } from '@heroicons/react/24/outline'
import { getSalon } from 'api'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, WhatsAppIcon, WhatsAppIconBW } from 'ui/server'
import Image from 'next/image'
import type { FC } from 'react'

type SocialNetwork = {
  name: string
  icon: FC<{className: string}>
  iconAlternative: FC<{className: string}>
  href: string
}

const socialNetworksMeta: Record<string, Omit<SocialNetwork, 'href'>> = {
  facebook: {
    name: 'Facebook',
    icon: FacebookIcon,
    iconAlternative: FacebookIcon
  },
  instagram: {
    name: 'Instagram',
    icon: InstagramIcon,
    iconAlternative: InstagramIcon
  },
  whatsapp: {
    name: 'WhatsApp',
    icon: WhatsAppIconBW,
    iconAlternative: WhatsAppIcon
  }
}

export default async function StoreMap () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!storeId) return null

  const store = await getSalon(storeId)
  if (!store || !store.map) return null

  const socialNetworks: Array<SocialNetwork> = Object.keys(store.social_networks ?? {})
    .filter(value => socialNetworksMeta[value])
    .map((key) => {
      return {
        ...socialNetworksMeta[key],
        href: store?.social_networks?.[key] ?? ''
      }
    })

  return (
    <>
      <section className="max-w-7xl mx-auto flex gap-4 flex-col md:flex-row my-8">
        <div className="flex-grow">
          <h2 className="text-4xl">Gonzalo Alonso Studio</h2>
          <Link href="https://maps.google.com/maps/dir//Gonzalo+Alonso+Studio+Mitre+820+B7000+Tandil+Provincia+de+Buenos+Aires/@-37.3226979,-59.1349067,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x95911fc724fd3d1b:0x73872f573ef403dd" target='_blank' rel='' className="flex justify-start py-4 gap-2"><MapPinIcon className="w-6 h-6" />{store.address} - {store.city}, {store.state}</Link>
          <div className='flex gap-8 py-10'>
            {socialNetworks.map((item) => (
              <Link key={item.name} href={item.href} target="_blank" rel="noreferrer nofollow" className="opacity-90 hover:opacity-70">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-9 w-9" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <div className='relative w-[400px] h-[200px] rounded-lg self-start'>
            <Link href='/studio'>
              <Image src='/studio/1.jpg' alt='Studio' className='rounded-lg object-cover grayscale hover:grayscale-0' fill />
            </Link>
          </div>

        </div>
        <div className="flex-grow" dangerouslySetInnerHTML={{ __html: store.map }} />

      </section>
      {
        store.social_networks?.whatsapp
          ? (<Link href={store.social_networks.whatsapp} target="_blank" rel="noreferrer nofollow">
            <span className="sr-only">{socialNetworksMeta.whatsapp.name}</span>
            <socialNetworksMeta.whatsapp.iconAlternative className="w-16 fixed bottom-4 right-4 m-4" aria-hidden="true" />
          </Link>)
          : null
      }

    </>
  )
}
