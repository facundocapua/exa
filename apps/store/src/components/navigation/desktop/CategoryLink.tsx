import CategoryLinkText from './CategoryLinkText'
import CategoryLinkWithImage from './CategoryLinkWithImage'
import { ProductCategory } from '@medusajs/medusa'

type Props = {
  category: ProductCategory
  customLabel?: string
  noImage?: boolean
  onClick: () => void
}

export default function CategoryLink ({ category, customLabel, noImage, onClick }: Props) {
  if (!category.metadata.image || noImage) {
    return (<CategoryLinkText category={category} customLabel={customLabel} onClick={onClick}/>)
  }

  return (<CategoryLinkWithImage category={category} customLabel={customLabel} onClick={onClick}/>)
}
