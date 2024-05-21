import { getBrands, getTopLevelCategories } from 'api'
import Navigation from './Navigation'
import { getPages } from '../../utils/navigation'

export default async function MainNavigation () {
  const categories = await getTopLevelCategories()
  const brands = await getBrands()
  const pages = getPages()
  const navigation = {
    categories,
    brands,
    pages
  }

  return (
    <Navigation navigation={navigation} />
  )
}
