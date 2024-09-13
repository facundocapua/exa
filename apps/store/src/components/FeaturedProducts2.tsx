import { getCollectionProducts } from 'api'
import { ProductSlider } from 'ui'

const collectionHandle = 'new'

export default async function FeaturedProducts2 () {
  const products = await getCollectionProducts(collectionHandle)

  if (!products) return null

  return (
    <div className='py-8 bg-neutral-200'>
      <h2 className='mx-auto text-center text-3xl font-semibold mb-6'>Descubrí lo Nuevo</h2>
      <ProductSlider products={products} theme='v2' />
    </div>
  )
}
