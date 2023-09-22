'use client'

import type { Brand } from 'api'
import Image from 'next/image'
import Link from 'next/link'
import BrandsListNav from './BrandsListNav'
import { useMemo, useState } from 'react'

type Props = {
  brands: Array<Brand>
}

export default function BrandsList ({ brands }: Props) {
  const [currentLetter, setCurrentLetter] = useState<string>('')
  const filteredBrands = useMemo(() => {
    if (!currentLetter) return brands
    return brands.filter((brand) => brand.name.charAt(0).toUpperCase() === currentLetter)
  }, [brands, currentLetter])

  return (
    <>
      <BrandsListNav brands={brands} current={currentLetter} onChange={setCurrentLetter} />
      <section className='lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-5 lg:gap-y-12'>
        {filteredBrands.map((brand) => (
          <div className='col-span-1' key={brand.id}>
            <Link href={`/brand/${brand.slug}`}>
              <Image src={brand.image} alt={brand.name} width={150} height={150} />
            </Link>
          </div>
        ))}
      </section>
    </>
  )
}
