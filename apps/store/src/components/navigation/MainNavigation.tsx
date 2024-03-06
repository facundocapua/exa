import { getBrands, getTopLevelCategories } from 'api'
import Navigation from './Navigation'

export default async function MainNavigation () {
  const categories = await getTopLevelCategories()
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
