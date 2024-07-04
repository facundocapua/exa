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
        <CmsGallery images={images} />
      </Suspense>
    </section>
  )
}
