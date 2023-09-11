import { getBrands, getCategories } from 'api'
import Navigation from './Navigation'

export default async function MainNavigation () {
  const categories = await getCategories()
  const brands = await getBrands()
  const navigation = {
    categories,
    brands,
    pages: [
      // { name: 'Company', href: '#' },
      // { name: 'Stores', href: '#' }
    ]
  }

  return (
    <Navigation navigation={navigation} />
  )
}
