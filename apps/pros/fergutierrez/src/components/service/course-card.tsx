import { BookOpenIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import { generateWhatsAppLink } from 'utils'
import Image from 'next/image'

type Props = {
  name: string
  description: string[]
  topics?: string[]
  price?: string
  classes?: number
  duration?: number
  image: string
  message: string
  whatsapp: string
}

export default async function CourseCard ({ name, description, duration, whatsapp, message, image, classes, topics }: Props) {
  return (
    <a href={generateWhatsAppLink(whatsapp, message)}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gray-200 rounded-t-lg transition-all duration-500 hover:-translate-y-4 cursor-pointer flex flex-col"
    >
      <div className='h-[300px] w-full relative'>
        <Image alt={name} src={image} className="object-cover  rounded-t-lg" fill />
      </div>
      <div className='p-4 flex flex-col justify-between gap-4 grow'>
        <h3 className="text-2xl font-light text-center">{name}</h3>

        <div className='border-b border-b-gray-400 py-4 grow'>
          {description.map((line, index) => (
            <p className="text-md text-left" key={index}>{line}</p>
          ))}

          {topics
            ? (
              <ol>
                {topics.map((line, index) => (
                  <li className="text-md flex items-center gap-2 my-1" key={index}>
                    <CheckIcon className="w-4 h-4 text-rose-700" />
                    {line}
                  </li>
                ))}
              </ol>
              )
            : null}
        </div>

        {/* <p className="text-5xl text-center">
          { price
            ? (<span><small className="text-2xl pr-2">$</small>{price}</span>)
            : (<span className="text-3xl uppercase">Consultar</span>)
        }
        </p> */}
        <div className='border-b border-b-gray-400 py-3 flex justify-around'>
          <div className="flex items-center justify-center gap-2">
            <BookOpenIcon className="w-6 h-6" />
            <span className="font-light text-lg"><span className="font-semibold">{classes}</span> <small>clases</small></span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ClockIcon className="w-6 h-6" />
            <span className="font-light text-lg">
              <span className="font-semibold">{duration}</span> <small>min (por clase)</small>
            </span>
          </div>
        </div>

        <button className='w-full uppercase bg-black text-white text-xl py-2 px-8 rounded-md inline-block mt-6'>
          Consultar
        </button>
      </div>
    </a>
  )
}
