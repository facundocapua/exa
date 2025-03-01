import type { Brand } from 'api'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  brands: Array<Brand>
}

export const SimpleBrandList = ({ brands }: Props) => {
  return (
    <div className='flex gap-8 md:mx-4 mx-0 items-center justify-center'>
      {brands.map((brand) => (
        <Link
          key={brand.id}
          href={`/brand/${brand.handle}`}
          aria-label={brand.name}
          title={brand.name}
          className='embla__slide shrink-0 grow-0 basis-1/3 md:basis-1/6 hover:opacity-75 transition-all duration-150 ease-in-out'
        >
          <Image
            src={brand.logo || '/images/placeholder.png'}
            alt={brand.name}
            className="dark:invert"
            width={180}
            height={180}
          />
        </Link>
      ))}
    </div>
  )
}

export default SimpleBrandList
