import type { Filter } from 'api'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

type Props = {
  filter: Filter
}

export default function FilterRadio ({ filter }: Props) {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const value = searchParams.get(filter.attribute)?.split(',') ?? []

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = new URLSearchParams(searchParams)
    const newValue = event.target.value

    if (event.target.checked) {
      query.set(filter.attribute, value.concat(newValue).join(','))
    } else {
      query.delete(filter.attribute)
    }

    replace(`${pathname}?${query.toString()}`)
  }

  return (
    <>
      {filter.options.map((option, optionIdx) => (
        <div key={option.value} className="flex items-center">
          <input
            id={`${filter.attribute}-${optionIdx}`}
            name={`${filter.attribute}[]`}
            value={option.value}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            onChange={handleChange}
            checked={value.includes(option.value.toString())}
          />
          <label htmlFor={`${filter.attribute}-${optionIdx}`} className="ml-3 text-sm text-gray-600 dark:text-gray-200">
            {option.name}
          </label>
        </div>
      ))}
    </>
  )
}
