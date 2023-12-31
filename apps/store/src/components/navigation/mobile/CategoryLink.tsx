import type { Category } from 'api'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  category: Category,
  customLabel?: string,
  noImage?: boolean,
  onClick?: () => void
}

export default function CategoryLink ({ category, customLabel, noImage, onClick }: Props) {
  if (!category.image || noImage) {
    return (
      <Link href={`/${category.slug}`} key={category.name} className='relative' onClick={onClick}>
        <h3 className="mt-6 block text-sm font-medium text-neutral-900">
          <span className="absolute inset-0 z-10" aria-hidden="true" />
          {customLabel || category.name}
        </h3>
      </Link>
    )
  }

  return (
    <Link href={`/${category.slug}`} key={category.name} className="relative" onClick={onClick}>
      {category.image && (
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md ">
        <Image src={category.image} alt={category.description} className="object-cover object-center" width={280} height={280} />
      </div>
      )}
      <h3 className="mt-6 text-sm font-medium text-neutral-900 hidden">
        <span className="absolute inset-0 z-10" aria-hidden="true" />
        {customLabel || category.name}
      </h3>
    </Link>
  )
}
