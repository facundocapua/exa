'use client'

import type { Product } from 'api'
import ProductCard from '../product-card/ProductCard'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import BackButton from './BackButton'
import ForwardButton from './ForwardButton'

import { ProductCardV2 } from '../product-card/product-cart-v2'

type Props = {
  products: Array<Product>
  theme?: string
}

type ProductItemProps = {
  theme?: string
  product: Product
  key: string
}

const ProductItem = ({ theme, product }: ProductItemProps) => {
  if (theme === 'v2') {
    return (
      <ProductCardV2 product={product} containerClassName='embla__slide flex-shrink-0 flex-grow-0 basis-1/2 mx-2 md:mx-0 md:basis-1/5 md:mr-4' />
    )
  }

  return (
    <ProductCard product={product} containerClassName='embla__slide flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/5 md:mr-4' />
  )
}

export const ProductSlider = ({ theme, products }: Props) => {
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
      <div className="embla__viewport overflow-hidden md:mx-12" ref={emblaRef}>
        <div className='embla__container flex'>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} theme={theme} />
          ))}
        </div>
      </div>

      <BackButton onClick={scrollPrev} />
      <ForwardButton onClick={scrollNext} />
    </section>
  )
}

export default ProductSlider
