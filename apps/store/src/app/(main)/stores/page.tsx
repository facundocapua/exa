import StoreLocator from '@/components/stores/StoreLocator'
import { getStores } from 'api'

export default async function Stores () {
  const stores = await getStores()

  return (
    <main className="my-12">
      <h1 className="text-2xl font-bold text-center">Buscador de Salones</h1>
      <StoreLocator stores={stores} />
    </main>
  )
}
