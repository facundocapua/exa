import type { Brand } from 'api'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

type Props = {
  brands: Array<Brand>
  link?: boolean
}

export const SimpleBrandList = ({ brands, link = true }: Props) => {
  return (
    <div className='flex gap-8 md:mx-4 mx-0 items-center justify-center'>
      {brands.map((brand) => (
        <Fragment key={brand.id}>
        {link ? (
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
        ) : (
          <Image
            src={brand.logo || '/images/placeholder.png'}
            alt={brand.name}
            className="dark:invert"
            width={180}
            height={180}
          />
        )}
        </Fragment>
      ))}
    </div>
  )
}

export default SimpleBrandList
