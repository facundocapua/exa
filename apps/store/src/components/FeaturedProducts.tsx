import { getCollectionProducts } from 'api'
import TrackProductList from 'ui/components/ga/track-product-list'
import { ProductSlider } from 'ui/components/product-slider/product-slider'

const collectionHandle = 'featured'

export default async function FeaturedProducts () {
  const products = await getCollectionProducts(collectionHandle)

  if (!products) return null

  return (
    <div className='py-4 bg-neutral-200'>
      <h2 className='mx-auto text-center text-3xl font-semibold mb-6'>Destacados del mes</h2>
      <ProductSlider products={products} theme='v2' />
      <TrackProductList products={products} listId={'featured-products'} />
    </div>
  )
}
