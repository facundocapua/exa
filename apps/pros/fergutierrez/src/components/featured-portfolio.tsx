import { Suspense } from 'react'
import FeaturedTitle from './featured-title'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'

const images = [
  '/portfolio/1.jpg',
  '/portfolio/2.jpg',
  '/portfolio/3.jpg',
  '/portfolio/4.jpg',
  '/portfolio/5.jpg'
  // '/portfolio/6.jpg'
]

const imagesClasses = [
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative [&>*]:object-[50%_40%]',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-3 relative [&>*]:object-[50%_45%]',
  'w-full block h-[350px] md:h-full rounded-xl relative [&>*]:object-[50%_30%]',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative [&>*]:object-[50%_10%]',
  'w-full block h-[350px] md:h-full rounded-xl relative'
  // 'w-full block h-[350px] md:h-full rounded-xl relative'
]

// const imagesClasses = [
//   'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative [&>*]:object-[50%_40%]',
//   'w-full block h-[350px] md:h-full rounded-xl md:col-span-2 relative [&>*]:object-[50%_45%]',
//   'w-full block h-[350px] md:h-full rounded-xl relative [&>*]:object-[50%_30%]',
//   'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative [&>*]:object-[50%_10%]',
//   'w-full block h-[350px] md:h-full rounded-xl relative',
//   'w-full block h-[350px] md:h-full rounded-xl relative'
// ]

export default function FeaturedPortfolio () {
  return (
    <section className='py-8 my-8 px-8'>
      <FeaturedTitle>Portfolio</FeaturedTitle>
      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={images} imagesClasses={imagesClasses} />
      </Suspense>
    </section>
  )
}
