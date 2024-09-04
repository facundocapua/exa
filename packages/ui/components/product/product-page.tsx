import type { Product } from 'api'
import ProductImageGallery from './ProductImageGallery'
import ProductInfo from './ProductInfo'
import RelatedProducts from './RelatedProducts'

type Props = {
  product: Product;
};

export const ProductPage = ({ product }: Props) => {
  return (
    <div className="pb-8">
      <section className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 mb-4">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Product */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <ProductImageGallery product={product} />
            {/* Product info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfo product={product} />
            </div>
          </div>
        </div>
      </section>
      <RelatedProducts product={product} />
    </div>
  )
}

export default ProductPage
