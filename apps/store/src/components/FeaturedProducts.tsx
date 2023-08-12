import { getFeaturedProducts } from 'api'
import { ProductFeaturedList } from 'ui'

export default async function FeaturedProducts () {
  const products = await getFeaturedProducts()
  const topProducts = products.slice(0, 4)

  if (!products) return null

  return (
    <div className='py-4 bg-neutral-200'>
      <h1 className='mx-auto text-center text-2xl font-semibold my-4'>Promociones</h1>
      <ProductFeaturedList products={topProducts} />
    </div>
  )
}
