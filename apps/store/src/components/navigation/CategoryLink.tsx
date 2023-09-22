import type { Category } from 'api'
import CategoryLinkText from './CategoryLinkText'
import CategoryLinkWithImage from './CategoryLinkWithImage'

type Props = {
  category: Category
  customLabel?: string
  noImage?: boolean
  onClick: () => void
}

export default function CategoryLink ({ category, customLabel, noImage, onClick }: Props) {
  if (!category.image || noImage) {
    return (<CategoryLinkText category={category} customLabel={customLabel} onClick={onClick}/>)
  }

  return (<CategoryLinkWithImage category={category} customLabel={customLabel} onClick={onClick}/>)
}
