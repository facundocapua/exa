import Link from 'next/link'
import { InstagramIcon } from 'ui/server'
import Logo from './logo'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import type { Salon } from 'api'
import { getSalon } from 'api'

const socialNetworks = {
  // {
  //   name: 'Facebook',
  //   href: 'https://www.facebook.com/alonsoestilista',
  //   icon: FacebookIcon
  // },
  instagram: {
    name: 'Instagram',
    href: '',
    icon: InstagramIcon
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

  return (
    <footer className='bg-gray-100'>
      <div className='mx-auto max-w-7xl px-6 py-12 lg:px-8 flex w-full justify-between'>
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
        </div>
      </div>
      <hr className='max-w-7xl mx-auto border-gray-300' />
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 ">
        <div className="flex justify-center space-x-6 md:order-2">
          {Object.values(socialNetworks).map((item) => (
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
    </footer>
  )
}
