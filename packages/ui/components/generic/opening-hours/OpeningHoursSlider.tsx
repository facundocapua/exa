'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import BackButton from './BackButton'
import ForwardButton from './ForwardButton'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type Props = {
  hours: Array<{
    day: string
    hours: string
  }>
  itemClassName?: string
  itemActiveClassName?: string
}

export default function OpeningHoursSlider ({ hours, itemClassName = 'bg-gray-400 dark:bg-gray-800', itemActiveClassName = 'bg-primary-300 dark:bg-primary-700' }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // loop: true,
    slidesToScroll: 2
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (!hours) return null

  return (
    <section className='embla relative h-[350px] flex justify-center items-center'>
      <div className="embla__viewport overflow-hidden md:mx-0 mx-4" ref={emblaRef}>
        <div className='embla__container touch-pan-y flex gap-8 md:mx-4 mx-2'>
          {hours.map((item) => (
            <article key={item.day} className='embla__slide grow-0 shrink-0  md:basis-0'>
              <div className={clsx(twMerge(
                'rounded-full flex flex-col items-center justify-center w-[150px] h-[150px]',
                item.hours ? itemActiveClassName : itemClassName
              ))}>
                <span className="text-5xl">{item.day}</span>
                <span className="text-lg">{item.hours ? item.hours : 'Cerrado'}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <BackButton onClick={scrollPrev} />
      <ForwardButton onClick={scrollNext} />
    </section>
  )
}
