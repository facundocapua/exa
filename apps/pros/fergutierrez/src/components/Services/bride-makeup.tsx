import { ClockIcon } from '@heroicons/react/24/outline'
import Button from '../button'
import { generateWhatsAppLink } from 'utils'
import { getSalon } from 'api'

export default async function BrideMakeup () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!storeId) return null

  const store = await getSalon(storeId)
  if (!store || !store.social_networks) return null

  const { whatsapp } = store.social_networks
  const message = 'Hola, me gustaría solicitar presupueso para el servicio de maquillaje de novias/eventos.'

  return (
    <section className="max-w-7xl mx-auto mb-12">
      <p>Te asesoro en el proceso de la elección del maquillaje, para que ese día tengas el look adecuado según tu estilo.</p>
      <p>Realizamos una prueba de maquillaje con anticipación.</p>
      <p>El día de la boda el maquillaje lo podemos hacer en mi estudio o a domicilio (se cobra adicional por viático).</p>

      <ol className="relative border-l border-gray-300 mt-12">
        <li className="mb-14 ml-4">
          <div className="absolute w-4 h-4 bg-primary-400 rounded-full mt-1.5 -left-2 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-600">Entre 2 y 6 meses antes del evento</time>
          <h3 className="text-3xl font-semibold text-gray-700 font-handwriting my-2">Entrevista inicial</h3>
          <p className="mb-4 text-base font-normal text-gray-500">Hacemos una reunión en nuestro estudio para que te saques todas las dudas.</p>
          <div className="flex items-center gap-2 my-4 text-gray-500">
            <ClockIcon className="w-6 h-6" />
            <span className="font-light text-md">Duración: <span className="font-semibold">30</span> <small>minutos</small></span>
          </div>
        </li>
        <li className="mb-14 ml-4">
          <div className="absolute w-4 h-4 bg-primary-400 rounded-full mt-1.5 -left-2 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-600 ">Un mes antes del evento</time>
          <h3 className="text-3xl font-semibold text-gray-700 font-handwriting my-2">Prueba de maquillaje</h3>
          <p className="text-base font-normal text-gray-500">Probamos el maquillaje que vas a llevar puesto el día del evento para que te asegures que te vas a ver como esperas.</p>
          <div className="flex items-center gap-2 my-4 text-gray-500">
            <ClockIcon className="w-6 h-6" />
            <span className="font-light text-md">Duración: <span className="font-semibold">30</span> <small>minutos</small></span>
          </div>
        </li>
        <li className="ml-4">
          <div className="absolute w-4 h-4 bg-primary-400 rounded-full mt-1.5 -left-2 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-600 ">Día del evento</time>
          <h3 className="text-3xl font-semibold text-gray-700 font-handwriting my-2">Maquillaje para la fiesta</h3>
          <p className="text-base font-normal text-gray-500">Lo podemos realizar en nuestro estudio o a domicilio, lo imporante ese día es que te sientas cómoda.</p>
          <div className="flex items-center gap-2 my-4 text-gray-500">
            <ClockIcon className="w-6 h-6" />
            <span className="font-light text-md">Duración: <span className="font-semibold">60</span> <small>minutos</small></span>
          </div>

          <Button link={generateWhatsAppLink(whatsapp!, message)}>Solicitar presupuesto</Button>
        </li>
      </ol>
    </section>

  )
}
