import { getFeaturedProducts } from 'api'
import { ProductSlider } from 'ui'

export default async function FeaturedProducts2 () {
  const products = await getFeaturedProducts()
  const topProducts = products.slice(9, 15)

  if (!topProducts || topProducts.length < 1) return null

  return (
    <div className='py-8 bg-neutral-200'>
      <h1 className='mx-auto text-center text-3xl font-semibold mb-6'>Descubrí lo Nuevo</h1>
      <ProductSlider products={topProducts} />
    </div>
  )
}
