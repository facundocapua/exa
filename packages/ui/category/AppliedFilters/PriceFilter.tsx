import { XMarkIcon } from '@heroicons/react/24/outline'
import { formatPrice } from '../../utils/price'
import { Badge } from '../../generic'

type Props = {
  values: string
  generateLink: (attribute: string, value: string) => string
}

export default function PriceFilter ({ values, generateLink }: Props) {
  const [min, max] = values.split('-').map((value: string) => Number(value))

  return (
    <div className="flex items-center py-2">
      <span className="text-sm font-medium text-neutral-900 dark:text-neutral-50">Precio:</span>
      <span className="ml-2 text-sm text-neutral-700 flex gap-1 w-full flex-wrap dark:text-neutral-200">
        <a href={generateLink('price', values)}>
          <Badge className='gap-1'>
            {formatPrice(min)} - {formatPrice(max)}
            <XMarkIcon className="h-4 w-4" />
          </Badge>
        </a>
      </span>
    </div>
  )
}
