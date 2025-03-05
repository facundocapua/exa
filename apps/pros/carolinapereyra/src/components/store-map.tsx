import { getSalon } from 'api'

export default async function StoreMap () {
  const storeId = process.env.NEXT_PUBLIC_STORE_ID ?? ''
  if (!storeId) return null

  const store = await getSalon(storeId)
  if (!store) return null

  if (!store.map) return null

  return (
    <section className="max-w-7xl mx-auto flex gap-4 flex-col md:flex-row my-8">
      <div className="grow" dangerouslySetInnerHTML={{ __html: store.map }} />
    </section>
  )
}
