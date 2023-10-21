import { getBrands, getCategories } from 'api'
import NavigationMobile from './NavigationMobile'

export default async function MainNavigationMobile () {
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
    <NavigationMobile navigation={navigation} />
  )
}
