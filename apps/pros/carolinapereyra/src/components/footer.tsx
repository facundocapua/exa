import Link from 'next/link'
import { InstagramIcon, WhatsAppIcon } from 'ui/server'
import Logo from './logo'
import { ChevronRightIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import type { Salon } from 'api'
import { getSalon } from 'api'
import Image from 'next/image'

const socialNetworks = {
  instagram: {
    name: 'Instagram',
    href: '',
    icon: InstagramIcon
  },
  whatsapp: {
    name: 'WhatsApp',
    href: '',
    icon: WhatsAppIcon
  }
}

const getGoogleSearchLink = (store: Salon) => {
  const search = `${store.address} - ${store.city}, ${store.state}`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(search)}`
}

export default async function Footer () {
  const salonId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  const salon = await getSalon(salonId)

  if (!salon) return null

  socialNetworks.instagram.href = salon?.social_networks?.instagram ?? ''
  socialNetworks.whatsapp.href = salon?.social_networks?.whatsapp ?? ''

  return (
    <footer className='bg-gray-100'>
      <div className='mx-auto max-w-7xl px-6 py-12 lg:px-8 flex flex-col md:flex-row items-center gap-8 w-full justify-between'>
        <Logo centered={false} />
        <div className="flex flex-col text-gray-700 gap-4">
          <h3 className='uppercase text-xl text-gray-800'>Contacto</h3>
          <Link href={`mailto:${salon.email}`} className='flex items-center gap-2'>
            <EnvelopeIcon className='w-5 h-5' /> {salon.email}
          </Link>
          <Link href={`sms:${salon.phone}`} className='flex items-center gap-2'>
            <PhoneIcon className='w-5 h-5' /> {salon.phone}
          </Link>
          <Link href={salon.map_link ?? getGoogleSearchLink(salon)} target="_blank" rel="noreferrer nofollow" className='flex items-center gap-2'>
            <MapPinIcon className='w-5 h-5' /> {salon.address} - {salon.city}, {salon.state}
          </Link>
          <Link href="/arrepentimiento" className='flex items-center text-sm'>
            <ChevronRightIcon className='w-4 h-4' />Arrepentimiento
          </Link>
        </div>
      </div>
      <hr className='max-w-7xl mx-auto border-gray-300' />
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 ">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="http://qr.afip.gob.ar/?qr=IUsHD3VMWpJNosIMv6Dg0w,," target='_blank' rel="noreferrer nofollow" className="mr-4">
            <span className="sr-only">AFIP</span>
            <Image src='/afip.webp' alt='logo afip' width={23} height={32} />
          </Link>
          {Object.values(socialNetworks)
            .filter(item => item.name !== 'WhatsApp')
            .map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-700 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </Link>
            ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-700">
            Tienda creada por <Link href="https://exabeauty.com.ar" className='text-lg'>eXa</Link>
          </p>
        </div>
      </div>

      {
        socialNetworks.whatsapp.href !== ''
          ? (
            <Link href={socialNetworks.whatsapp.href} target="_blank" rel="noreferrer nofollow">
              <span className="sr-only">{socialNetworks.whatsapp.name}</span>
              <socialNetworks.whatsapp.icon className="w-16 fixed bottom-1 right-1 md:bottom-4 md:right-4 md:m-4" aria-hidden="true" />
            </Link>
            )
          : null
      }
    </footer>
  )
}
