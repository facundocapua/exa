import { generateWhatsAppLink } from 'utils'
import { getSalon } from 'api'
import Image from 'next/image'
import Link from 'next/link'
import eyebrowns from '@public/services/3.jpg'

export default async function EyebrownsDesign () {
  const salonId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!salonId) return null

  const salon = await getSalon(salonId)
  if (!salon || !salon.social_networks) return null

  const { whatsapp } = salon.social_networks
  const message = 'Hola, me gustaría solicitar turno para perfilado de cejas.'

  return (
    <section className="max-w-7xl mx-auto mb-12 relative">
      <div className='flex relative flex-col w-full lg:w-1/2 lg:flex-row lg:absolute h-[550px]'>
        <Image
          alt="Perfilado de cejas"
          src={eyebrowns}
          className="h-1/2 lg:h-full w-full object-cover object-[50%_10%] lg:object-[50%_20%]"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-24 pt-8 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-12 lg:px-8 lg:pt-32">
        <div className="lg:col-start-2">
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Diseño y perfilado de cejas</h2>
          <p className='my-4'>
            El servicio de diseño y perfilado de cejas está diseñado para realzar tu belleza natural y darte una apariencia pulida y profesional.
          </p>
          <p className='my-4'>
            Tener unas cejas bien diseñadas no solo mejora la simetría de tu rostro, sino que también aumenta tu confianza, haciéndote sentir segura y radiante en cualquier ocasión.
          </p>
          <p className='my-4'>
            ¡Dejame ayudarte a destacar tu mejor versión con unas cejas perfectamente perfiladas!
          </p>
          <div>
            <Link href={generateWhatsAppLink(whatsapp!, message)} className='uppercase bg-black text-white text-xl py-2 px-8 rounded-md inline-block mt-6 hover:scale-110 transition-all duration-300'>
              solicitar turno
            </Link>
          </div>
        </div>
      </div>

    </section>

  )
}
