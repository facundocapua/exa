import { Suspense } from 'react'
import { Breadcrumb } from 'ui/server'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'
import SectionTitle from '@/components/section-title'

const images = [
  '/portfolio/1.jpg',
  '/portfolio/2.jpg',
  '/portfolio/3.jpg',
  '/portfolio/4.jpg',
  '/portfolio/5.jpg'
  // '/portfolio/6.jpg'
]

const imagesClasses = [
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative *:object-[50%_40%]',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-3 relative *:object-[60%_45%]',
  'w-full block h-[350px] md:h-full rounded-xl relative *:object-[50%_30%]',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative *:object-[50%_10%]',
  'w-full block h-[350px] md:h-full rounded-xl relative'
  // 'w-full block h-[350px] md:h-full rounded-xl relative'
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
    <main className="w-full px-4 mb-4 mt-4">
      <div className='max-w-7xl mx-auto mb-4'>
        <Breadcrumb pages={breadcrumbs} />
      </div>

      <SectionTitle>Portfolio</SectionTitle>

      <section className='max-w-7xl mx-auto'>
        <Suspense fallback={<CmsGallerySkeleton />}>
          <CmsGallery images={images} imagesClasses={imagesClasses} />
        </Suspense>
      </section>
    </main>
  )
}
