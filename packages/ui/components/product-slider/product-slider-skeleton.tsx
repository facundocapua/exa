'use client'

import useEmblaCarousel from 'embla-carousel-react'
import ProductCardSkeleton from '../product-card/product-cart-skeleton'
import BackButton from './BackButton'
import ForwardButton from './ForwardButton'

type Props = {
  title: string
}

export const ProductSliderSkeleton = ({ title }: Props) => {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className='py-4 bg-neutral-200'>
      <h1 className='mx-auto text-center text-3xl font-semibold mb-6'>{title}</h1>
      <section className='embla relative'>
        <div className="embla__viewport overflow-hidden md:mx-12" ref={emblaRef}>
          <div className='embla__container flex'>
            <ProductCardSkeleton containerClassName='flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/5 md:mr-4' />
            <ProductCardSkeleton containerClassName='flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/5 md:mr-4' />
            <ProductCardSkeleton containerClassName='flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/5 md:mr-4' />
            <ProductCardSkeleton containerClassName='flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/5 md:mr-4' />
            <ProductCardSkeleton containerClassName='flex-shrink-0 flex-grow-0 basis-1/2 md:basis-1/5 md:mr-4' />
          </div>
        </div>

        <BackButton onClick={() => {}} />
        <ForwardButton onClick={() => {}}/>
      </section>
    </div>
  )
}

export default ProductSliderSkeleton
