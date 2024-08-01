import { getStoreFeaturedBrands } from 'api'
import { BrandFeaturedList } from 'ui'
import { SimpleBrandList } from 'ui/components/brand-featured-list/simple-brand-list'

type Props = {
  title?: string
}

export default async function FeaturedBrands ({ title }: Props) {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  const brands = await getStoreFeaturedBrands(storeId)
  if (!brands || brands.length === 0) return null

  return (
    <section className='py-8'>
      <h2 className='mx-auto text-center text-2xl md:text-3xl font-normal font-custom uppercase mb-8 text-primary-600'>
        {title ?? 'Marcas que utilizamos'}
      </h2>
      {
        brands.length > 4
          ? <BrandFeaturedList brands={brands} />
          : <SimpleBrandList brands={brands} />
      }
    </section>
  )
}
