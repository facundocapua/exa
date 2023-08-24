'use client'

import type { Product } from 'api'
import ProductCard from '../product-card/ProductCard'
import useEmblaCarousel from 'embla-carousel-react'

type Props = {
  products: Array<Product>
}

export default function ProductSlider ({ products }: Props) {
  const [emblaRef] = useEmblaCarousel()

  if (!products) return null

  return (
    <section ref={emblaRef} className='embla overflow-hidden'>
      <div className='embla__container flex md:gap-4 gap-2 md:mx-4 mx-0'>
        {products.map((product) => (
          <ProductCard key={product.sku} product={product} containerClassName='embla__slide flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/5' />
        ))}
      </div>
    </section>
  )
}
