import { Category, getCategories, getTopLevelCategories } from 'api'
import SimpleNavigation from '../navigation/simple-navigation'

type Props = {
  allowedCategories?: Array<string>
  categoryHandlers?: Array<string>
}

const filterCategories = (categories: Array<Category>, handlers: Array<string>) => {
  return categories.filter((c) => handlers.includes(c.handle) && (c.is_active === undefined || c.is_active))
}

export const StoreNavigation = async ({ allowedCategories, categoryHandlers }: Props) => {
  let categories = categoryHandlers 
    ? filterCategories(await getCategories(), categoryHandlers) 
    : await getTopLevelCategories()
    
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
