import { MapPinIcon } from '@heroicons/react/24/outline'
import { getStore } from 'api'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon } from 'ui/server'
import WhatsAppIcon from '../../public/assets/whatsapp.svg'
import WhatsAppIconBW from '../../public/assets/whatsapp-bw.png'
import Image from 'next/image'

const socialNetworks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/alonsoestilista',
    icon: FacebookIcon
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/gonzaloalonsoestilista/',
    icon: InstagramIcon
  }
]

const whatsapp = '5492494381017'

export default async function StoreMap () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  const store = await getStore(storeId)

  if (!store) return null

  return (
    <>
      <section className="max-w-7xl mx-auto flex gap-4 flex-col md:flex-row my-8">
        <div className="flex-grow">
          <h2 className="text-4xl">Gonzalo Alonso Studio</h2>
          <Link href="https://maps.google.com/maps/dir//Gonzalo+Alonso+Studio+Mitre+820+B7000+Tandil+Provincia+de+Buenos+Aires/@-37.3226979,-59.1349067,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x95911fc724fd3d1b:0x73872f573ef403dd" target='_blank' rel='' className="flex justify-start py-4 gap-2"><MapPinIcon className="w-6 h-6" />{store.address} - {store.city}, {store.state}</Link>
          <div className='flex gap-8 py-10'>
            {socialNetworks.map((item) => (
              <Link key={item.name} href={item.href} className="text-gray-300 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-9 w-9" aria-hidden="true" />
              </Link>
            ))}
            <Link href={`https://wa.me/${whatsapp}`} className="opacity-90 hover:opacity-70">
              <span className="sr-only">WhatsApp</span>
              <Image src={WhatsAppIconBW} className="h-9 w-9 invert" aria-hidden="true" alt='WhastApp' />
            </Link>
          </div>
          <div className='relative w-[400px] h-[200px] rounded-lg self-start'>
            <Link href='/studio'>
              <Image src='/portfolio/portfolio-1.jpg' alt='Studio' className='rounded-lg object-cover grayscale hover:grayscale-0' fill />
            </Link>
          </div>

        </div>
        <div className="flex-grow">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.836606973158!2d-59.13748162331226!3d-37.32269787210279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911fc724fd3d1b%3A0x73872f573ef403dd!2sGonzalo%20Alonso%20Studio!5e0!3m2!1ses-419!2sar!4v1698443707290!5m2!1ses-419!2sar" width="100%" height="450" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
      <Link href={`https://wa.me/${whatsapp}`} target="_blank" rel="noreferrer nofollow">
        <Image className="w-16 fixed bottom-4 right-4 m-4" src={WhatsAppIcon} alt='WhastApp' />
      </Link>
    </>
  )
}
