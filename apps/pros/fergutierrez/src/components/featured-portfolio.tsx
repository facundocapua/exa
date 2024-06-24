import { Suspense } from 'react'
import FeaturedTitle from './featured-title'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'

const images = [
  '/portfolio/1.jpg',
  '/portfolio/2.jpg',
  '/portfolio/3.jpg',
  '/portfolio/4.jpg',
  '/portfolio/5.jpg',
  '/portfolio/6.jpg'
]

export default function FeaturedPortfolio () {
  return (
    <section className='py-8 my-8 px-8'>
      <FeaturedTitle>Portfolio</FeaturedTitle>
      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={images} />
      </Suspense>
    </section>
  )
}
