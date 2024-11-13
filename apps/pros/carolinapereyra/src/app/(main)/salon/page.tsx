import { Suspense } from 'react'
import { Breadcrumb } from 'ui/server'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'
import SectionTitle from '@/components/section-title'

const images = [
  '/salon/1.webp',
  '/salon/2.webp',
  '/salon/3.webp',
  '/salon/4.webp'
  // '/salon/5.jpg',
  // '/salon/6.jpg'
]

const imagesClasses = [
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl md:col-span-2 relative [&>*]:object-[50%_25%]',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl relative'
  // 'w-full block h-[350px] md:h-full rounded-xl relative',
  // 'w-full block h-[350px] md:h-full rounded-xl relative'
]

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/studio`
  }
}

export default function StudioPage () {
  const breadcrumbs = [
    {
      name: 'Salón',
      url: '/salon',
      current: true
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-0 md:pb-8">
      <Breadcrumb pages={breadcrumbs} />

      <SectionTitle>Salón</SectionTitle>

      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={images} imagesClasses={imagesClasses} containerClassName='md:grid-rows-[350px_350px]' />
      </Suspense>
    </section>
  )
}
