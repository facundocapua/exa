import Breadcrumb from '@/components/Breadcrumb'
import { getBrand } from 'api'
import React from 'react'

type Props = {
  params: {
    slug: string
  },
  children: React.ReactNode
}

export default async function CatalogLayout ({ params, children }: Props) {
  const { slug } = params
  const brand = await getBrand(slug)

  const brecrumbs = []

  if (brand) {
    brecrumbs.push({
      name: brand.name,
      url: `/${brand.slug}`,
      current: true
    })
  }

  return (
    <div className='max-w-7xl mx-auto my-12'>
      <Breadcrumb pages={brecrumbs} />
      {children}
    </div>
  )
}
