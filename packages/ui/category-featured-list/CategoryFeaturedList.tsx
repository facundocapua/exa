import type { Category } from 'api'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  categories: Array<Category>
}

export default function CategoryFeaturedList ({ categories }: Props) {
  if (!categories) return null

  return (
    <div className='grid grid-cols-2 mx-4 md:mx-0 md:flex gap-8 justify-center'>
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/${category.slug}`}
          aria-label={category.name}
          title={category.name}
          className='relative rounded-full overflow-hidden hover:opacity-75 transition-all duration-150 ease-in-out'
        >
          <Image
            src={category.image}
            alt={category.name}
            width={200}
            height={200}
          />
          <h2 className='text-2xl absolute top-1/2 w-full backdrop-blur-sm text-neutral-100 py-2 text-center'>{category.name}</h2>
        </Link>
      ))}
    </div>
  )
}
