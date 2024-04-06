import { getCategories } from 'api'
import { CategoryFeaturedList } from 'ui/server'

export default async function FeaturedCategories () {
  const categories = await getCategories()

  if (!categories) return null

  return (
    <section className='py-4'>
      <h1 className='mx-auto text-center text-3xl font-semibold mb-6'>Categorias</h1>
      <CategoryFeaturedList categories={categories} />
    </section>
  )
}
