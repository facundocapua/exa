'use client'

import { FILTER_TYPE } from 'api'
import type { Filter } from 'api'
import FilterRadio from './FilterRadio'
import FilterRange from './FilterRange'

type Props = {
  filters: Array<Filter>
}

export default function Filters ({ filters }: Props) {
  return (
    <>
      {filters.map((filter, filterIdx) => (
        (filter.options.length > 1 && filter.options[0].value !== filter.options[1].value &&
          <div key={filter.attribute} className={filterIdx === 0 ? undefined : 'pt-10'}>
            <fieldset>
              <legend className="block text-sm font-medium text-gray-900 dark:text-gray-100">{filter.name}</legend>
              <div className="space-y-3 pt-6">
                {filter.type === FILTER_TYPE.RADIO && (<FilterRadio filter={filter} />)}
                {filter.type === FILTER_TYPE.RANGE && (<FilterRange filter={filter} />)}
              </div>
            </fieldset>
          </div>
        )
      ))}
    </>
  )
}
