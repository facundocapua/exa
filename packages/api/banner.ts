import { initClient } from './utils/supabase'

export const getFeaturedBanners = async () => {
  const client = initClient()
  const { data } = await client.from('banners').select('*')

  return data
}
