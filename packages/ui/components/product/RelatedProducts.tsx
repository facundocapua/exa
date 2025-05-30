import { getRelatedProducts, type Product } from 'api'
import ProductSlider from '../product-slider/product-slider'
import TrackProductList from '../ga/track-product-list'

type Props = {
  product: Product
}

const MAX_RELATED_PRODUCTS = 10

export default async function RelatedProducts ({ product }: Props) {
  const products = await getRelatedProducts(product, MAX_RELATED_PRODUCTS)

  if (!products || products.length === 0) return null

  return (
    <div className='py-4 bg-neutral-200 dark:bg-neutral-800'>
      <h1 className='mx-auto text-center text-3xl font-semibold mb-6'>También te puede interesar</h1>
      <ProductSlider products={products} theme='v2' />
      <TrackProductList products={products} listId={`related-products-${product.handle}`} />
    </div>
  )
}
