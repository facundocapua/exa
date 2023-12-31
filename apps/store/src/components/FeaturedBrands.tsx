import { getFeaturedBrands } from 'api'
import { BrandFeaturedList } from 'ui'

export default async function FeaturedBrands () {
  const brands = await getFeaturedBrands()

  if (!brands) return null

  return (
    <section className='py-16 bg-neutral-100'>
      <h1 className='mx-auto text-center text-2xl md:text-3xl font-semibold mb-8'>Marcas Líderes de Belleza</h1>
      <BrandFeaturedList brands={brands} />
    </section>
  )
}
