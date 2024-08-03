import { Suspense } from 'react'
import { Breadcrumb } from 'ui/server'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'

const images = [
  '/studio/1.webp',
  '/studio/2.webp',
  '/studio/3.jpg',
  '/studio/4.webp',
  '/studio/5.jpg',
  '/studio/6.webp'
]

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/studio`
  }
}

export default function StudioPage () {
  const breadcrumbs = [
    {
      name: 'Studio',
      url: '/studio',
      current: true
    }
  ]

  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight border-neutral-900">Studio</h1>
      </div>

      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={images} />
      </Suspense>
    </section>
  )
}
