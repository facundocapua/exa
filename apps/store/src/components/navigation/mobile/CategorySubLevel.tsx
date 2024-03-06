import type { Category } from 'api'
import CategoryLink from './CategoryLink'
import clsx from 'clsx'

type Props = {
  category: Category,
  onClick: () => void
}

export default function CategorySubLevel ({ category, onClick }: Props) {
  const typeImage = category.metadata?.type === 'image'

  return (
    <div className={clsx({
      'grid grid-cols-2 gap-x-4 gap-y-10': typeImage,
      'flex flex-col gap-y-4': !typeImage
    })}>
      {category.category_children?.map((item) => (
        <CategoryLink
          key={item.name}
          category={item}
          noImage={!typeImage}
          onClick={onClick}
        />
      ))}
      <CategoryLink category={category} noImage={!typeImage} customLabel={category.name === 'Marcas' ? 'Todas las marcas' : 'Ver todo'} onClick={onClick} />
    </div>
  )
}
