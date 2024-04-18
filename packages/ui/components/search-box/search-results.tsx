import { Product } from "api"
import Image from "next/image"
import Link from "next/link"

type Props = {
  products: Product[]
}
export const SearchResults = ({products}: Props) => {
  return (
    <div className="absolute bg-white rounded-md drop-shadow-md z-20 py-4 flex flex-col gap-y-2 max-h-screen overflow-y-auto">
      {products.map((product) => (
        <Link href={`/product/${product.handle}`} key={product.id} className="group">
          <article className="flex items-center group-hover:bg-neutral-100 p-2">
            <Image src={product.thumbnail} width={50} height={50} alt={product.title} />
            <h4>{product.title}</h4>
          </article>
        </Link>
      ))}
    </div>
  )
}

export default SearchResults