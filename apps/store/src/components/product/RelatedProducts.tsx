import { getRelatedProducts, type Product } from 'api'
import { ProductSlider } from 'ui'

type Props = {
  sku: Product['sku']
}

export default async function RelatedProducts ({ sku }: Props) {
  const products = await getRelatedProducts(sku)

  if (!products || products.length === 0) return null

  return (
    <div className='py-4 bg-neutral-200'>
      <h1 className='mx-auto text-center text-3xl font-semibold mb-6'>También te puede interesar</h1>
      <ProductSlider products={products} />
    </div>
  )
}
