import { getFeaturedCategories } from 'api'
import { CategoryFeaturedList } from 'ui'

export default async function FeaturedCategories () {
  const categories = await getFeaturedCategories()

  if (!categories) return null

  return (
    <section className='py-4'>
      <h1 className='mx-auto text-center text-3xl font-semibold mb-6'>Categorias</h1>
      <CategoryFeaturedList categories={categories} />
    </section>
  )
}
