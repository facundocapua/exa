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
} as const

export default async function StoreMap () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!storeId) return null

  const store = await getSalon(storeId)
  if (!store) return null

  if (!store.map) return null

  const socialNetworks: Array<SocialNetwork> = Object.keys(store.social_networks ?? {})
    .filter(value => socialNetworksMeta[value])
    .map((key) => {
      return {
        ...socialNetworksMeta[key]!,
        href: store?.social_networks?.[key] ?? ''
      }
    })

  return (
    <>
      <section className="max-w-7xl mx-auto flex gap-4 flex-col md:flex-row my-8">
        <div className="flex-grow" dangerouslySetInnerHTML={{ __html: store.map }} />
      </section>
      {
        store.social_networks?.whatsapp
          ? (<Link href={store.social_networks.whatsapp} target="_blank" rel="noreferrer nofollow">
            {
            socialNetworksMeta.whatsapp
              ? (
                <>
                  <span className="sr-only">{socialNetworksMeta.whatsapp.name}</span>
                  <socialNetworksMeta.whatsapp.iconAlternative className="w-16 fixed bottom-4 right-4 m-4" aria-hidden="true" />
                </>
                )
              : null}

          </Link>)
          : null
      }

    </>
  )
}
