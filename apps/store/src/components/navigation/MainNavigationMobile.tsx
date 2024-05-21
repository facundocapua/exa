import { getBrands, getTopLevelCategories } from 'api'
import NavigationMobile from './NavigationMobile'
import { getPages } from '../../utils/navigation'

export default async function MainNavigationMobile () {
  const categories = await getTopLevelCategories()
  const brands = await getBrands()
  const pages = getPages()

  const navigation = {
    categories,
    brands,
    pages
  }

  return (
    <NavigationMobile navigation={navigation} />
  )
}
