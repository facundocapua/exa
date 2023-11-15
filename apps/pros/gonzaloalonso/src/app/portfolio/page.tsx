import Portfolio from '@/components/Gallery'
import { Breadcrumb } from 'ui/server'

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
    <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={breadcrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight border-neutral-900">Portfolio</h1>
      </div>

      <Portfolio images={images} />
    </div>
  )
}
