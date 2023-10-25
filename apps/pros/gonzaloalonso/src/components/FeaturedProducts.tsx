import { getStoreFeaturedProducts } from 'api'
import { ProductSlider } from 'ui'

export default async function FeaturedProducts () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  const products = await getStoreFeaturedProducts(storeId)
  const topProducts = products.slice(0, 8)

  if (!products) return null

  return (
    <div className='py-8 bg-black'>
      <h1 className='mx-auto text-center text-3xl font-semibold mb-6'>Destacados del mes</h1>
      <ProductSlider products={topProducts} />
    </div>
  )
}
