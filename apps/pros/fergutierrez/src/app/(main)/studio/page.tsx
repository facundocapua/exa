import Gallery from '@/components/gallery'

const images = [
  '/studio/1.jpg',
  '/studio/2.jpg',
  '/studio/3.jpg',
  '/studio/4.jpg',
  '/studio/5.jpg',
  '/studio/6.jpg'
]

export default function StudioPage () {
  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl mb-4">
      <div className="pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight border-neutral-900">Studio</h1>
      </div>

      <Gallery images={images} />
    </div>
  )
}
