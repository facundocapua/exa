import type { Product } from 'api'
import ProductCard from '../product-card/ProductCard'

type Props = {
  products: Array<Product>
}

export default function ProductFeaturedList ({ products }: Props) {
  if (!products) return null

  return (
    <section className="grid grid-cols-4 gap-x-12 px-12">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  )
}
