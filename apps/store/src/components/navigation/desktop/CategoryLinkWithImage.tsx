import { Category } from 'api'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  category: Category
  customLabel?: string
  onClick: () => void
}

export default function CategoryLinkWithImage ({ category, customLabel, onClick }: Props) {
  if (!category.metadata.image) return null

  return (
    <Link key={category.name} href={`/${category.handle}`} className="group relative" onClick={onClick}>
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md group-hover:opacity-75 transition-all duration-150 ease-in-out">
        <Image
            src={category.metadata.image as string}
            alt={customLabel || category.name}
            className="object-cover object-center m-auto rounded-md"
            width={category.metadata?.size === 'small' ? 80 : 120 }
            height={category.metadata?.size === 'small' ? 80 : 120 }
          />
      </div>
      <h4 className="mt-4 block font-medium text-gray-900 text-center">
        <span className="absolute inset-0 z-10" aria-hidden="true" />
        {customLabel || category.name}
      </h4>
    </Link>
  )
}
