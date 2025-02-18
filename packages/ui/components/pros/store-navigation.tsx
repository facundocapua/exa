import { getTopLevelCategories } from 'api'
import SimpleNavigation from '../navigation/simple-navigation'

type Props = {
  allowedCategories?: Array<string>
}

export const StoreNavigation = async ({ allowedCategories }: Props) => {
  let categories = await getTopLevelCategories()
  if (allowedCategories) {
    categories = categories.filter((category) => allowedCategories.includes(category.handle))
  }

  const navigation = {
    categories
  }

  return (
    <SimpleNavigation navigation={navigation} />
  )
}

export default StoreNavigation
