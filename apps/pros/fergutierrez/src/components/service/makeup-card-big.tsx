import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  name: string
  subtitle: string
  image: string
  duration: number
  description: string[]
  link: string
  align?: 'left' | 'right'
}

export default function MakeupCardBig ({ name, subtitle, image, duration, description, link, align = 'left' }: Props) {
  return (
    <article className="relative">
      <div className={clsx(
        'aspect-h-2 aspect-w-3 relative h-[400px] rounded-lg overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-[45%] lg:pr-4 xl:pr-16',
        {
          'lg:absolute lg:right-0': align === 'right'
        }
      )}>
        <Image
          alt={name}
          src={image}
          className="h-full w-full object-cover object-[50%_20%]"
          fill={true}
        />
      </div>

      <div className="mx-auto max-w-2xl px-4 pb-24 pt-8 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-12 lg:px-8 lg:pt-32">
        <div className={clsx({
          'lg:col-start-2': align === 'left',
          'lg:col-start-1': align === 'right'
        })}>
          <h3 id="features-heading" className="font-medium text-gray-500">
            {subtitle}
          </h3>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-gray-900">{name}</h2>

          <div className="flex items-center gap-2 my-4">
            <ClockIcon className="w-6 h-6" />
            <span className="font-light text-lg">Duración: <span className="font-semibold">{duration}</span> <small>minutos</small></span>
          </div>

          {description.map((line, index) => (
            <div key={index} className="my-3 flex items-center gap-2">
              <div className='w-6'>
                <CheckIcon className="w-6 h-6 text-black" />
              </div>
              <p className="text-md text-left text-lg max-w-[calc(100%-24px)]">{line}</p>
            </div>
          ))}

          <div>
            <Link href={link} className='uppercase bg-black text-white text-xl py-2 px-8 rounded-md inline-block mt-6 hover:scale-110 transition-all duration-300'>
              Reservar
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
