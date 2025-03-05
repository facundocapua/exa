import { Suspense } from 'react'
import { Breadcrumb } from 'ui/server'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'
import SectionTitle from '@/components/section-title'

const images = [
  '/portfolio/portfolio-1.webp',
  '/portfolio/portfolio-2.webp',
  '/portfolio/portfolio-3.webp',
  '/portfolio/portfolio-4.webp',
  '/portfolio/portfolio-5.webp',
  '/portfolio/portfolio-6.webp'
]

const imagesClasses = [
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl md:col-span-2 relative *:object-[50%_25%]',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl relative'
]

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/porfolio`
  }
}

export default function Page () {
  const breadcrumbs = [
    {
      name: 'Portfolio',
      url: '/porfolio',
      current: true
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-0">
      <Breadcrumb pages={breadcrumbs} />

      <SectionTitle>Portfolio</SectionTitle>

      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={images} imagesClasses={imagesClasses} />
      </Suspense>
    </section>
  )
}
