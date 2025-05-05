'use client'

import type { Brand } from 'api'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react/jsx-runtime'

type Props = {
  brands: Array<Brand>
  link?: boolean
}

export const BrandFeaturedList = ({ brands, link = true }: Props) => {
  if (!brands) return null

  return (

    <div className='grid grid-cols-2 md:flex justify-center gap-8 mx-4 md:mx-0'>
      {brands.map((brand) => (
        <Fragment key={brand.id}>
          {link ? (<Link
          href={`/brand/${brand.handle}`}
          aria-label={brand.name}
          title={brand.name}
          className='shrink-0 grow-0 basis-1/3 md:basis-1/6 hover:opacity-75 transition-all duration-150 ease-in-out'
        >
          <Image
            src={brand.logo || '/images/placeholder.png'}
            alt={brand.name}
            className="dark:invert"
            width={180}
            height={180}
          />
        </Link>) : (
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

export default BrandFeaturedList
