import { Suspense } from 'react'
import { Breadcrumb } from 'ui/server'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'
import { STORE_URL } from '@/utils/const'
import { Metadata } from 'next'

const images = [
  '/portfolio/portfolio-1.webp',
  '/portfolio/portfolio-2.webp',
  '/portfolio/portfolio-3.webp',
  '/portfolio/portfolio-4.jpg',
  '/portfolio/portfolio-5.jpg',
  '/portfolio/portfolio-6.jpg'
]

const imagesClasses = [
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl md:col-span-2 relative [&>*]:object-[50%_12%]',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl relative'
]

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/portfolio`
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
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight border-neutral-900">Portfolio</h1>
      </div>

      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={images} imagesClasses={imagesClasses} />
      </Suspense>
    </section>
  )
}
