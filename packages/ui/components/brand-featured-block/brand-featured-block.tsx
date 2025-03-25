import { getBrand, getProducts, type Brand } from 'api'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import ProductCardV2 from '../product-card/product-cart-v2'

type Props = {
  handle: Brand['handle']
  hideBannerMobile?: boolean
}

export const BrandFeaturedBlock = async ({ handle, hideBannerMobile }: Props) => {
  const brand = await getBrand(handle)
  if (!brand) return null

  const maxProducts = brand.featured_banner ? 3 : 6
  const products = await getProducts({ brand_id: [brand.id] })
    .then((products) => {
      const randomProducts = products.sort(() => Math.random() - 0.5).slice(0, maxProducts)
      return randomProducts
    })

  return (
    <div className={clsx(
      'grid grid-cols-1 py-8  bg-neutral-100 dark:bg-transparent gap-y-4 md:gap-y-0',
      { 'md:grid-cols-[auto_1fr]': brand.featured_banner},
    )}>
      {brand.featured_banner && (
        <Link href={`/brand/${brand.handle}`} className={clsx(
          'relative aspect-10/7 max-w-[800px]',
          { 'hidden md:block': hideBannerMobile }
          )}>
          <Image src={brand.featured_banner} alt={brand.name} fill />
        </Link>
      )}
      <div className='flex justify-evenly gap-2 [&>*:nth-child(n+3)]:hidden 2xl:[&>*:nth-child(n+3)]:flex'>
        {products.map((product) => (
          <ProductCardV2 key={product.id} product={product} containerClassName={clsx(
            'shrink-0 grow-0',
            { 'basis-1/2 2xl:basis-1/3': brand.featured_banner },
            { 'basis-1/6': !brand.featured_banner }
          )} />
        ))}
      </div>
    </div>
  )
}

export default BrandFeaturedBlock
