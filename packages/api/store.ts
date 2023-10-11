import type { Store } from './types'
import { initClient } from './utils/supabase'

export async function getStores (): Promise<Array<Store>> {
  const client = initClient()
  const { data } = await client
    .from('stores')
    .select('*, brands(*)')
    .eq('is_active', true)
    .returns<Array<Store>>()

  if (!data?.length) return []

  return data
}
