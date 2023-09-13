import { Category } from './types'
import { initClient } from './utils/supabase'

export const getCategories = async (): Promise<Array<Category>> => {
  const client = initClient()
  const { data } = await client
    .from('categories')
    .select('*')
    .order('sort', { ascending: true })
    .returns<Array<Category>>()

  if(!data) return []

  const categories = data.filter((item) => !item.parent).map((item) => {
    return {
      ...item,
      children: data.filter(subitem => subitem.parent === item.id)
    }
  })
  
  return categories
}

export const getFeaturedCategories = async (): Promise<Array<Category>> => {
  const client = initClient()
  const { data } = await client
    .from('categories')
    .select('*')
    .eq('is_featured', true)
    .order('sort', { ascending: true })
    .returns<Array<Category>>()

  if(!data) return []
  
  return data
}

export const getCategory = async (slug: string): Promise<Category | null> => {
  const client = initClient()
  const { data } = await client
    .from('categories')
    .select('*, parent(*)')
    .eq('slug', slug)
    .returns<Category>()
    .single()
  
  return data
}
