import Portfolio from '@/components/Portfolio'
import { Breadcrumb } from 'ui/server'

const images = [
  '/studio/1.jpg',
  '/studio/2.jpg',
  '/studio/3.jpg',
  '/studio/4.jpg',
  '/studio/5.jpg',
  '/studio/6.jpg'
]

export default function Page () {
  const breadcrumbs = [
    {
      name: 'Studio',
      url: '/studio',
      current: true
    }
  ]

  return (
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight border-neutral-900">Studio</h1>
      </div>

      <Portfolio images={images} />
    </div>
  )
}
