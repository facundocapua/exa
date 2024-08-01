import clsx from 'clsx'

const BrandItemSkeleton = () => {
  return (
    <div className="w-full md:w-auto aspect-square bg-neutral-300 animate-pulse flex-shrink-0 flex-grow-0 basis-1/3 md:basis-1/6"></div>
  )
}

type Props = {
  title?: string
  containerClassname?: string
}

export const BrandFeaturedSkeleton = ({ title, containerClassname }: Props) => {
  return (
    <div className={clsx(
      'py-8',
      { 'bg-neutral-100': !containerClassname },
      containerClassname
    )}>
      <h2 className='mx-auto text-center text-2xl md:text-3xl font-semibold mb-8'>
        { title ?? 'Marcas Líderes de Belleza' }
      </h2>
      <div className='embla relative'>
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
      </div>
    </div>
  )
}

export default BrandFeaturedSkeleton
