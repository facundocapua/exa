import CategoryLink from './CategoryLink'
import { ProductCategory } from '@medusajs/medusa'

type Props = {
  category: ProductCategory,
  onClick: () => void
}

const subLevelClasess = {
  text: 'flex gap-x-12 justify-around gap-y-12 py-16',
  image: 'grid grid-cols-5 gap-y-12 py-16'
}

export default function CategorySubLevel ({ category, onClick }: Props) {
  const typeImage = category.metadata?.type === 'image'
  const containerClases = typeImage ? subLevelClasess.image : subLevelClasess.text

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className={containerClases}>
          {category.category_children?.map((item) => (
            <CategoryLink key={item.name} category={item} noImage={!typeImage} onClick={onClick} />
          ))}
          <CategoryLink category={category} noImage={!typeImage} customLabel={category.name === 'Marcas' ? 'Todas las marcas' : 'Ver todo'} onClick={onClick} />
        </div>
      </div>
    </div>
  )
}
