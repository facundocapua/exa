import { Category } from 'api'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  category: Category,
  customLabel?: string,
  noImage?: boolean
}

export default function CategoryLink ({ category, customLabel, noImage }: Props) {
  if (!category.metadata.image || noImage) {
    return (
      <Link href={`/${category.handle}`} key={category.name} className='relative'>
        <h3 className="mt-6 block text-sm font-medium text-neutral-900">
          <span className="absolute inset-0 z-10" aria-hidden="true" />
          {customLabel || category.name}
        </h3>
      </Link>
    )
  }

  return (
    <Link href={`/${category.handle}`} key={category.name} className="relative">
      {category.metadata.image && (
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md ">
        <Image src={category.metadata.image as string} alt={category.description} className="object-cover object-center" width={280} height={280} />
      </div>
      )}
      <h3 className="mt-6 text-sm font-medium text-neutral-900 hidden">
        <span className="absolute inset-0 z-10" aria-hidden="true" />
        {customLabel || category.name}
      </h3>
    </Link>
  )
}
