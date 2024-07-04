import { Suspense } from 'react'
import { Breadcrumb } from 'ui/server'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'
import Title from '@/components/title'

const images = [
  '/portfolio/portfolio-1.jpg',
  '/portfolio/portfolio-2.jpg',
  '/portfolio/portfolio-3.jpg',
  '/portfolio/portfolio-4.jpg',
  '/portfolio/portfolio-5.jpg',
  '/portfolio/portfolio-6.jpg'
]

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

      <Title>Portfolio</Title>

      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={images} />
      </Suspense>
    </section>
  )
}
