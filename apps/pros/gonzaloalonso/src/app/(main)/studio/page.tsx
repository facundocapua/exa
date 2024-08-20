import { Suspense } from 'react'
import { Breadcrumb } from 'ui/server'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'
import SectionTitle from '@/components/section-title'

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
    <main className="w-full px-4 mb-4 mt-4">
      <div className='max-w-7xl mx-auto mb-4'>
        <Breadcrumb pages={breadcrumbs} />
      </div>

      <SectionTitle>Studio</SectionTitle>

      <section className='max-w-7xl mx-auto'>
        <Suspense fallback={<CmsGallerySkeleton />}>
          <CmsGallery images={images} />
        </Suspense>
      </section>
    </main>
  )
}
