import { Suspense } from 'react'
import { Breadcrumb } from 'ui/server'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'
import Title from '@/components/title'

const images = [
  '/studio/1.jpg',
  '/studio/2.jpg',
  '/studio/3.jpg',
  '/studio/4.jpg',
  '/studio/5.jpg',
  '/studio/6.jpg'
]

const imagesClasses = [
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl md:col-span-2 relative [&>*]:object-[50%_25%]',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl relative'
]

export default function StudioPage () {
  const breadcrumbs = [
    {
      name: 'Colecciones',
      url: '/colecciones',
      current: true
    }
  ]

  return (
    <section className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <Title>Colecciones</Title>

      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={images} imagesClasses={imagesClasses} />
      </Suspense>
    </section>
  )
}
