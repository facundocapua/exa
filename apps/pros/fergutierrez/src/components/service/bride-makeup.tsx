import { generateWhatsAppLink } from 'utils'
import { getSalon } from 'api'
import Image from 'next/image'
import Link from 'next/link'
import bride1 from '@public/services/1.jpg'
import bride2 from '@public/services/1-2.jpg'

export default async function BrideMakeup () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!storeId) return null

  const store = await getSalon(storeId)
  if (!store || !store.social_networks) return null

  const { whatsapp } = store.social_networks
  const message = 'Hola, me gustaría solicitar presupueso para el servicio de maquillaje de novias.'

  return (
    <section className="max-w-7xl mx-auto mb-12 relative">

      {/* <div className="aspect-h-2 aspect-w-3 relative h-[400px] rounded-lg overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16">
        <Image
          alt="Maquillaje de novias"
          src={bride1}
          className="h-full w-full object-cover object-[50%_20%]"
          fill={true}
        />
      </div> */}
      <div className='flex relative flex-col w-full lg:w-1/2 lg:flex-row lg:absolute h-[550px]'>
        <Image
          alt="Maquillaje de novias"
          src={bride1}
          className="h-1/2 lg:h-full w-full object-cover object-[50%_10%] lg:object-[50%_20%]"
        />
        <Image
          alt="Maquillaje de novias"
          src={bride2}
          className="h-1/2 lg:h-full w-full object-cover object-[50%_40%] lg:object-[50%_20%]"
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-24 pt-8 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-12 lg:px-8 lg:pt-32">
        <div className="lg:col-start-2">
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">Maquillaje de novias</h2>
          <p className='my-4'>
            Me gustaría ser parte de tu día especial y que juntas creemos el maquillaje perfecto para vos.
          </p>
          <p className='my-4'>
            Comenzamos con una entrevista para conocernos y saber qué es lo que estás buscando. Luego, realizamos una prueba de maquillaje para que puedas ver cómo te verías.
          </p>
          <p className='my-4'>
            El día de la boda puedo maquillarte en el lugar que prefieras, ya sea en tu casa o en mi salón. Lo importante es que estés tranquila y relajada.
          </p>
          <div>
            <Link href={generateWhatsAppLink(whatsapp!, message)} className='uppercase bg-black text-white text-xl py-2 px-8 rounded-md inline-block mt-6 hover:scale-110 transition-all duration-300'>
              solicitar presupuesto
            </Link>
          </div>
        </div>
      </div>

    </section>

  )
}
