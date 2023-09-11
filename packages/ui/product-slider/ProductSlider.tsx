'use client'

import type { Product } from 'api'
import ProductCard from '../product-card/ProductCard'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import BackButton from './BackButton'
import ForwardButton from './ForwardButton'

type Props = {
  products: Array<Product>
}

export default function ProductSlider ({ products }: Props) {
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

  if (!products) return null

  return (
    <section className='embla relative'>
      <div className="embla__viewport overflow-hidden mx-12" ref={emblaRef}>
        <div className='embla__container flex'>
          {products.map((product) => (
            <ProductCard key={product.sku} product={product} containerClassName='embla__slide flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/5 mr-4' />
          ))}
        </div>
      </div>

      <BackButton onClick={scrollPrev} />
      <ForwardButton onClick={scrollNext} />
    </section>
  )
}
