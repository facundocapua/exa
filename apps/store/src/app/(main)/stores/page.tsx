import StoreLocator from '@/components/stores/StoreLocator'
import { getStores } from 'api/store'
import { Breadcrumb } from 'ui/server'

export default async function Stores () {
  const stores = await getStores()
  const brecrumbs = [{
    name: 'Buscador de Salones',
    url: '/stores',
    current: true
  }]

  return (
    <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl my-4">
      <Breadcrumb pages={brecrumbs} />

      <div className="pt-12 pb-6 mb-6 border-b border-neutral-300 dark:border-neutral-500">
        <h1 className="text-4xl font-bold tracking-tight border-neutral-900">Buscador de Salones</h1>
      </div>

      <StoreLocator stores={stores} />
    </main>
  )
}
