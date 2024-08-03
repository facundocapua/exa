import { getStoreFeaturedBrands } from 'api'
import { BrandFeaturedList } from 'ui'

export default async function FeaturedBrands () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  const brands = await getStoreFeaturedBrands(storeId)
  if (!brands || brands.length === 0) return null

  return (
    <section className='py-8'>
      <h2 className='mx-auto text-center text-2xl md:text-3xl font-semibold mb-8'>Marcas que utilizamos</h2>
      <BrandFeaturedList brands={brands} />
    </section>
  )
}
