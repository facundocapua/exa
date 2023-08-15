import { XMarkIcon } from '@heroicons/react/24/outline'
import { Badge } from 'ui'
import { formatPrice } from 'ui/utils/price'

type Props = {
  values: string
  generateLink: (attribute: string, value: string) => string
}

export default function PriceFilter ({ values, generateLink }: Props) {
  const [min, max] = values.split(',').map((value: string) => Number(value))

  return (
    <div className="flex items-center py-2">
      <span className="text-sm font-medium text-neutral-900">Precio:</span>
      <a href={generateLink('price', values)}>
        <Badge className='gap-1'>
          {formatPrice(min)} - {formatPrice(max)}
          <XMarkIcon className="h-4 w-4" />
        </Badge>
      </a>
    </div>
  )
}
