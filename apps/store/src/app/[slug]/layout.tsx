import Breadcrumb from '@/components/Breadcrumb'
import { getCategory } from 'api'
import React from 'react'

type Props = {
  params: {
    slug: string
  },
  children: React.ReactNode
}

export default async function CategoryLayout ({ params, children }: Props) {
  const { slug } = params
  const category = await getCategory(slug)

  const brecrumbs = []

  if (category) {
    brecrumbs.push({
      name: category.name,
      url: `/category/${category.slug}`,
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
