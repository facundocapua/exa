import { ProductImageGallerySkeleton } from "./product-image-gallery-skeleton"
import { ProductInfoSkeleton } from "./product-info-skeleton"

export const ProductSkeleton = () => {
  return (
    <section className="mx-auto max-w-7xl sm:px-6 sm:pt-16 lg:px-8 mb-4">
      <div className="mx-auto max-w-2xl lg:max-w-none">
        {/* Product */}
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <ProductImageGallerySkeleton />
          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <ProductInfoSkeleton />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSkeleton