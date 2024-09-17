import { getStoreCollectionProducts } from 'api'
import { ProductSlider } from 'ui'

const collectionHandle = 'featured'

export default async function FeaturedProducts () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  const products = await getStoreCollectionProducts(storeId, collectionHandle)

  if (!products || products.length === 0) return null

  const topProducts = products.slice(0, 8)

  return (
    <div className='py-8 bg-black'>
      <h2 className='mx-auto text-center text-3xl font-semibold mb-6'>Destacados del mes</h2>
      <ProductSlider products={topProducts} theme='v2' />
    </div>
  )
}
