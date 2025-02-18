import type { Category } from 'api'
import Link from 'next/link'

type Props = {
  navigation: {
    categories: Array<Category>
  }
}

export const SimpleNavigation = ({ navigation }: Props) => {
  return (
    <div className='dark:bg-white/20 flex justify-center my-8 w-full'>
      <nav aria-label="Categorias" className='max-w-4xl w-full flex justify-evenly md:justify-between'>
        {navigation.categories.map((category) => (
          <Link
            key={category.id}
            href={`/tienda/${category.handle}`}
            className='md:text-xl py-4 hover:opacity-70 font-semibold transition-opacity duration-200 ease-in-out'>
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default SimpleNavigation
