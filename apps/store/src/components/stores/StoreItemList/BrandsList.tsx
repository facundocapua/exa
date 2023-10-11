import type { Brand } from 'api'
import Image from 'next/image'

type Props = {
  brands: Array<Brand>
}

export default function BrandsList ({ brands }: Props) {
  return (
    <>
      <ul className='grid grid-cols-3 gap-4'>
        {brands.map((brand) => (
          <li key={brand.id} className='w-full text-center'><Image src={brand.image} width={35} height={35} alt={brand.name} className='mx-auto' /></li>
        ))}
      </ul>
    </>
  )
}
