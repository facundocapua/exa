'use client'
import type { Product } from 'api'
import ProductCard from '../product-card/ProductCard'
import BackButton from '../hero-slider/BackButton'
import ForwardButton from '../hero-slider/ForwardButton'
import useProductSlider from './useProductSlider'

type Props = {
  products: Array<Product>
}

export default function ProductSlider ({ products }: Props) {
  const { activeSlide, handleTouchStart, handleTouchEnd, handleBack, handleNext } = useProductSlider({
    numberOfSlides: products.length
  })

  if (!products) return null

  return (
    <section className="relative">
      <div
        style={{ transform: `translate3d(${-activeSlide * 100}%, 0, 0)` }}
        className="duration-700 ease-in-out whitespace-nowrap w-fit flex gap-x-4 flex-nowrap"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {products.map((product) => (
          <div key={product.id} className='w-[300px]'>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <BackButton onClick={handleBack} />
      <ForwardButton onClick={handleNext} />

    </section>
  )
}
