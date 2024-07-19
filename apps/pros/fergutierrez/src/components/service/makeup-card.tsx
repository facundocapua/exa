import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline'

type Props = {
  name: string
  price: string
  duration: number
  description: string[]
  link: string
}

export default function MakeupCard ({ name, price, duration, description, link }: Props) {
  return (
    <a href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-200 p-12 transition-all duration-500 hover:-translate-y-4 cursor-pointer grid grid-rows-[auto_1fr_auto] gap-4">
      <div className='border-b border-b-gray-400'>
        <h3 className="text-3xl font-light text-center">{name}</h3>
        <p className="text-5xl text-center my-6"><small className="text-2xl pr-2">$</small>{price}</p>
        <div className="flex items-center justify-center gap-2 my-4">
          <ClockIcon className="w-6 h-6" />
          <span className="font-light text-lg">Duración: <span className="font-semibold">{duration}</span> <small>minutos</small></span>
        </div>
      </div>

      <div className='border-b border-b-gray-400'>
        {description.map((line, index) => (
          <div key={index} className="my-3 flex items-center gap-2">
            <CheckIcon className="w-4 h-4 text-rose-700" />
            <p className="text-md text-left text-lg max-w-[calc(100%-24px)]">{line}</p>
          </div>
        ))}
      </div>

      <div>
        <button className='w-full uppercase bg-black text-white text-xl py-2 px-8 rounded-md inline-block mt-6 hover:scale-110 transition-all duration-300'>
          Reservar
        </button>
      </div>
    </a>
  )
}
