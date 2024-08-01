import { Suspense } from 'react'
import { Breadcrumb } from 'ui/server'
import { CmsGallery } from 'ui/components/cms/gallery/cms-gallery'
import { CmsGallerySkeleton } from 'ui/components/cms/gallery/cms-gallery-skeleton'
import Title from '@/components/title'
import { Metadata } from 'next'
import { STORE_URL } from '@/utils/const'

const imagesWinter = [
  '/collections/fenix/winter/1.webp',
  '/collections/fenix/winter/2.webp',
  '/collections/fenix/winter/3.webp',
  '/collections/fenix/winter/4.webp',
  '/collections/fenix/winter/5.webp',
  '/collections/fenix/winter/6.webp'
]

const imagesWinterClasses = [
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative [&>*]:object-[40%_50%]',
  'w-full block h-[350px] md:h-full rounded-xl md:col-span-2 relative [&>*]:object-[50%_25%]',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative [&>*]:object-[50%_50%]',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl relative'
]

const imagesSummer = [
  '/collections/fenix/summer/1.webp',
  '/collections/fenix/summer/2.webp',
  '/collections/fenix/summer/3.webp',
  '/collections/fenix/summer/4.webp',
  '/collections/fenix/summer/5.webp',
  '/collections/fenix/summer/6.webp'
]

const imagesSummerClasses = [
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative',
  'w-full block h-[350px] md:h-full rounded-xl md:col-span-2 relative [&>*]:object-[50%_15%]',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl md:row-span-2 relative [&>*]:object-[65%_50%]',
  'w-full block h-[350px] md:h-full rounded-xl relative',
  'w-full block h-[350px] md:h-full rounded-xl relative [&>*]:object-[65%_30%]'
]

export const metadata: Metadata = {
  alternates: {
    canonical: `${STORE_URL}/colecciones`
  }
}

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

      <h2 className='text-2xl text-secondary-600 my-2'>Fenix Otoño/Invierno</h2>
      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={imagesWinter} imagesClasses={imagesWinterClasses} param='winter' />
      </Suspense>

      <hr className='border border-primary-400 mt-12 mb-6' />

      <h2 className='text-2xl text-primary-600 my-2'>Fenix Primavera/Verano</h2>
      <Suspense fallback={<CmsGallerySkeleton />}>
        <CmsGallery images={imagesSummer} imagesClasses={imagesSummerClasses} param='summer' />
      </Suspense>
    </section>
  )
}
