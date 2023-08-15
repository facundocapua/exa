'use client'

import { FILTER_TYPE } from 'api'
import type { FilterOption, Filter } from 'api'
import FilterRadio from './FilterRadio'
import FilterRange from './FilterRange'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {
  filters: Array<Filter>
}

export default function Filters ({ filters }: Props) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleMultiValueChange = (attribute: Filter['attribute'], value: Array<FilterOption['value']>) => {
    const query = new URLSearchParams(Array.from(searchParams.entries()))
    if (!value.length) {
      query.delete(attribute)
      router.push(`${pathname}?${query.toString()}`)
      return
    }

    query.set(attribute, value.toString())
    router.push(`${pathname}?${query.toString()}`)
  }

  return (
    <>
      {filters.map((filter, filterIdx) => (
        (filter.options.length > 1 && filter.options[0].value !== filter.options[1].value &&
          <div key={filter.attribute} className={filterIdx === 0 ? undefined : 'pt-10'}>
            <fieldset>
              <legend className="block text-sm font-medium text-gray-900">{filter.name}</legend>
              <div className="space-y-3 pt-6">
                {filter.type === FILTER_TYPE.RADIO && (<FilterRadio filter={filter} defaultValue={searchParams.get(filter.attribute)?.split(',')} onChange={handleMultiValueChange} />)}
                {filter.type === FILTER_TYPE.RANGE && (<FilterRange filter={filter} defaultValue={searchParams.get(filter.attribute)?.split(',').map(parseFloat)} onChange={handleMultiValueChange} />)}
              </div>
            </fieldset>
          </div>
        )
      ))}
    </>
  )
}
