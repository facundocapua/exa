import type { Filter } from 'api'
import { Price } from '../generic'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Slider } from '../generic/Slider'

type Props = {
  filter: Filter
}

export default function FilterRange ({ filter }: Props) {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const defaultValue = searchParams.get(filter.attribute)?.split('-').map(Number) ?? null
  const [minValue, maxValue] = filter.options.map((option) => option.value as number)

  const [defaultMinValue, defaultMaxValue] = defaultValue ?? [minValue, maxValue]

  if (minValue === Infinity || maxValue === -Infinity) return null

  const handleChange = (values: Array<number>) => {
    const query = new URLSearchParams(searchParams)

    if (values[0] === minValue && values[1] === maxValue) {
      query.delete(filter.attribute)
    } else {
      query.set(filter.attribute, values.join('-'))
    }

    replace(`${pathname}?${query.toString()}`)
  }

  return (
    <>
      <Slider
        defaultValue={[Number(defaultMinValue), Number(defaultMaxValue)]}
        min={minValue}
        max={maxValue}
        minStepsBetweenThumbs={100}
        onValueCommit={handleChange}
      />
      <div className='flex justify-between'>
        <Price className='text-sm text-gray-600 dark:text-gray-400' amount={Number(minValue)} />
        <Price className='text-sm text-gray-600 dark:text-gray-400' amount={Number(maxValue)} />
      </div>
    </>
  )
}
