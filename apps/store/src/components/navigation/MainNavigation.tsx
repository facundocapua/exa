import { getCategories } from 'api'
import Navigation from './Navigation'

export default async function MainNavigation () {
  const categories = await getCategories()
  const navigation = {
    categories,
    pages: [
      { name: 'Company', href: '#' },
      { name: 'Stores', href: '#' }
    ]
  }

  return (
    <Navigation navigation={navigation} />
  )
}
