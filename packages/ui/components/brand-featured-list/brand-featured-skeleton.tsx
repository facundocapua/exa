
const BrandItemSkeleton = () => {
  return (
    <div className="w-full md:w-auto aspect-square bg-neutral-300 animate-pulse flex-shrink-0 flex-grow-0 basis-1/3 md:basis-1/6"></div>
  )
}

export const BrandFeaturedSkeleton = () => {
  return (
    <div className='py-8 bg-neutral-100'>
      <h1 className='mx-auto text-center text-2xl md:text-3xl font-semibold mb-8'>Marcas Líderes de Belleza</h1>
      <section className='embla relative'>
      <div className="embla__viewport overflow-hidden md:mx-12 mx-8">
        <div className='embla__container flex gap-8 md:mx-4 mx-0'>
          <BrandItemSkeleton />
          <BrandItemSkeleton />
          <BrandItemSkeleton />
          <BrandItemSkeleton />
          <BrandItemSkeleton />
          <BrandItemSkeleton />
        </div>
      </div>
    </section>
    </div>
  )
}

export default BrandFeaturedSkeleton