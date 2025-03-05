import { Suspense } from 'react'
import { Breadcrumb } from 'ui/server'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'
import SectionTitle from '@/components/section-title'

const imagesSummer = [
  '/collections/1.webp',
  '/collections/2.webp',
  '/collections/3.webp',
  '/collections/4.webp',
  '/collections/5.webp',
  '/collections/6.webp'
]

const imagesSummerClasses = [
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl md:col-span-2 relative *:object-[50%_15%]',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative *:object-[65%_50%]',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl relative *:object-[65%_30%]'
]

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/tendencias`
  }
}

export default function StudioPage () {
  const breadcrumbs = [
    {
      name: 'Tendencias',
      url: '/tendencias',
      current: true
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-0 md:pb-8">
      <Breadcrumb pages={breadcrumbs} />

      <SectionTitle>Tendencias</SectionTitle>

      <h2 className='text-2xl text-primary-600 my-2'>Primavera/Verano</h2>
      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={imagesSummer} imagesClasses={imagesSummerClasses} param='summer' />
      </Suspense>
    </section>
  )
}
