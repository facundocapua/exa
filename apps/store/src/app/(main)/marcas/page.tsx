import Breadcrumb from '@/components/Breadcrumb'
import { getBrands } from 'api'
import { BrandsList } from 'ui'

export default async function Brand () {
  const brands = await getBrands()

  const brecrumbs = []

  brecrumbs.push({
    name: 'Marcas',
    url: '/brands',
    current: true
  })

  return (
    <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-12">
      <Breadcrumb pages={brecrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300">
        <h1 className="text-4xl font-bold tracking-tight text-neuborder-neutral-900">Marcas</h1>
      </div>

      <div className="pb-24">
        <BrandsList brands={brands} />
      </div>
    </main>
  )
}
