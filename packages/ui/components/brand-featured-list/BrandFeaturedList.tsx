'use client'

import type { Brand } from 'api'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import Link from 'next/link'
import { useCallback } from 'react'
import BackButton from './BackButton'
import ForwardButton from './ForwardButton'

type Props = {
  brands: Array<Brand>
}

export default function CategoryFeaturedList ({ brands }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    // loop: true,
    slidesToScroll: 'auto'
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  if (!brands) return null

  return (
    <section className='embla relative'>
      <div className="embla__viewport overflow-hidden md:mx-12 mx-8" ref={emblaRef}>
        <div className='embla__container flex gap-8 md:mx-4 mx-0'>
          {brands.map((brand) => (
            <Link
              key={brand.id}
              href={`/brand/${brand.handle}`}
              aria-label={brand.name}
              title={brand.name}
              className='embla__slide flex-shrink-0 flex-grow-0 basis-1/3 md:basis-1/6 hover:opacity-75 transition-all duration-150 ease-in-out'
            >
              <Image
                src={brand.logo || '/images/placeholder.png'}
                alt={brand.name}
                className="dark:invert"
                width={180}
                height={180}
              />
            </Link>
          ))}
        </div>
      </div>
      <BackButton onClick={scrollPrev} />
      <ForwardButton onClick={scrollNext} />
    </section>
  )
}
