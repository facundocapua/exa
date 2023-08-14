'use client'

import { FILTER_TYPE } from 'api'
import type { FilterOption, Filter } from 'api'
import FilterRadio from './FilterRadio'
import FilterRange from './FilterRange'

type Props = {
  filters: Array<Filter>
}

export default function Filters ({ filters }: Props) {
  const handleSingleValueChange = (attribute: Filter['attribute'], value: FilterOption['value']) => {
    console.log({ attribute, value })
  }

  const handleMultiValueChange = (attribute: Filter['attribute'], value: Array<number>) => {
    console.log({ attribute, value })
  }

  return (
    <>
      {filters.map((filter, filterIdx) => (
        <div key={filter.attribute} className={filterIdx === 0 ? undefined : 'pt-10'}>
          <fieldset>
            <legend className="block text-sm font-medium text-gray-900">{filter.name}</legend>
            <div className="space-y-3 pt-6">
              {filter.type === FILTER_TYPE.RADIO && (<FilterRadio filter={filter} onChange={handleSingleValueChange} />)}
              {filter.type === FILTER_TYPE.RANGE && (<FilterRange filter={filter} onChange={handleMultiValueChange} />)}
            </div>
          </fieldset>
        </div>
      ))}
    </>
  )
}
