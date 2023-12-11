import { XMarkIcon } from '@heroicons/react/24/outline'
import { getCategory } from 'api'
import { Badge } from '../../generic'
import Link from 'next/link'

type Props = {
  values: string
  generateLink: (attribute: string, value: string) => string
}

const CategoryLabel = async ({ value }: {value: string}) => {
  const brand = await getCategory(value)
  if (!brand) return value

  return brand.name
}

export default async function CategoryFilter ({ values, generateLink }: Props) {
  return (
    <div className="flex items-center py-2">
      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">Categoria:</span>
      <span className="ml-2 text-sm text-neutral-700 flex gap-1 w-full flex-wrap dark:text-neutral-200">
        {values.split(',').map((value: string) => (
          <Link key={value} href={generateLink('category', value)}>
            <Badge className='gap-1'>
              <CategoryLabel value={value} />
              <XMarkIcon className="h-4 w-4" />
            </Badge>
          </Link>
        ))}
      </span>
    </div>
  )
}
