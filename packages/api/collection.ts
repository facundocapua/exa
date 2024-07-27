import { getProducts } from "./product"
import { getSalon } from "./salon"
import { Collection, Product } from "./types"
import { getMedusaUrl } from "./utils/medusa"

export const getCollections = async (): Promise<Array<Collection>> => {
  const collections = fetch(
    `${getMedusaUrl()}/store/collections`,
    {
      next: {
        tags: ['collections', 'products']
      },
      cache: 'force-cache'
    }
  )
    .then((res) => res.json())
    .then(data => {
      return data.collections
    })

  return collections
}



export const getCollection = async (handle: string): Promise<Collection | undefined> => {
  const collection = getCollections()
    .then((collections) => {
      return collections.find((collection) => collection.handle === handle)
    })

  return collection
}

export const getCollectionProducts = async (handle: string): Promise<Array<Product> | null> => {
  const collection = await getCollection(handle)
  if (!collection) return null

  const data = await getProducts({ collection_id: [collection.id] })

  return data
}

export const getStoreCollectionProducts = async (salonId: string, handle: string): Promise<Array<Product> | null> => {
  const salon = await getSalon(salonId)

  const collection = await getCollection(handle)
  if (!collection) return null

  const data = await getProducts({ collection_id: [collection.id], sales_channel_id: [salon?.sales_channel_id ?? ''] })

  return data
}