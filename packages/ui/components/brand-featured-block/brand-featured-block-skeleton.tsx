import clsx from 'clsx'
import ProductCardSkeleton from '../product-card/product-cart-skeleton'

const BannerSkeleton = () => {
  return (
    <div className="w-full md:w-auto aspect-square bg-neutral-300 animate-pulse flex-grow"></div>
  )
}

type Props = {
  containerClassname?: string
}

export const BrandFeaturedBlockSkeleton = ({ containerClassname }: Props) => {
  return (
    <div className={clsx(
      'grid grid-cols-1 md:grid-cols-[33%_auto] py-8',
      { 'bg-neutral-100 dark:bg-transparent': !containerClassname },
      containerClassname
    )}>
      <BannerSkeleton/>
      <div className='flex justify-evenly'>
        <ProductCardSkeleton />
        <ProductCardSkeleton />
        <ProductCardSkeleton />
      </div>
    </div>
  )
}

export default BrandFeaturedBlockSkeleton
