import { XMarkIcon } from '@heroicons/react/24/outline'
import { getBrand } from 'api'
import { Badge } from '../../generic'
import Link from 'next/link'

type Props = {
  values: string
  generateLink: (attribute: string, value: string) => string
}

const BrandLabel = async ({ value }: {value: string}) => {
  const brand = await getBrand(value)
  if (!brand) return value

  return brand.name
}

export default async function BrandFilter ({ values, generateLink }: Props) {
  return (
    <div className="flex items-center py-2">
      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">Marca:</span>
      <span className="ml-2 text-sm text-neutral-700 dark:text-neutral-200">
        {values.split(',').map((value: string) => (
          <Link key={value} href={generateLink('brand', value)}>
            <Badge className='gap-1'>
              <BrandLabel value={value} />
              <XMarkIcon className="h-4 w-4" />
            </Badge>
          </Link>
        ))}
      </span>
    </div>
  )
}
