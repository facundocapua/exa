import { getCollectionProducts } from 'api'
import { ProductSlider } from 'ui'

const collectionHandle = 'featured'

export default async function FeaturedProducts () {
  const products = await getCollectionProducts(collectionHandle)

  if (!products) return null

  return (
    <div className='py-4 bg-neutral-200'>
      <h1 className='mx-auto text-center text-3xl font-semibold mb-6'>Destacados del mes</h1>
      <ProductSlider products={products} />
    </div>
  )
}
