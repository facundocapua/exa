import { FC } from 'react'
import { FacebookIcon, InstagramIcon, TikTokIcon, WhatsAppIcon, WhatsAppIconBW } from '../icons'
import type { Salon } from 'api'
import Link from 'next/link'
import clsx from 'clsx'

type SocialNetwork = {
  name: string
  icon: FC<{className: string}>
  iconAlternative: FC<{className: string}>
  href: string
}

const socialNetworksData: Record<string, Omit<SocialNetwork, 'href'>> = {
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
  tiktok: {
    name: 'TikTok',
    icon: TikTokIcon,
    iconAlternative: TikTokIcon
  },
  whatsapp: {
    name: 'WhatsApp',
    icon: WhatsAppIconBW,
    iconAlternative: WhatsAppIcon
  }
} as const

type Props = {
  socialNetworks: Salon['social_networks']
  exclude?: Array<keyof typeof socialNetworksData>
  containerClassName?: string
  className?: string
}

export default function SocialNetworks ({ socialNetworks, exclude, containerClassName, className }: Props) {
  const networks: Array<SocialNetwork> = Object.keys(socialNetworks ?? {})
    .filter(value => socialNetworksData[value] && !exclude?.includes(value))
    .map((key) => {
      return {
        ...socialNetworksData[key],
        href: socialNetworks?.[key] ?? ''
      }
    })

  if (!networks.length) return null

  return (
    <div className={clsx('flex justify-center space-x-6', containerClassName)}>
      {networks.map((item) => (
        <Link key={item.name} href={item.href} target='_blank' rel="nofollow noreferrer" className="text-gray-300 hover:text-gray-400">
          <span className="sr-only">{item.name}</span>
          <item.icon className="h-6 w-6" aria-hidden="true" />
        </Link>
      ))}
    </div>
  )
}
