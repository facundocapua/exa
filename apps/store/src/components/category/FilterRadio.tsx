import type { Filter, FilterOption } from 'api'
import React, { useEffect, useState } from 'react'

type Props = {
  filter: Filter
  defaultValue: Array<string> | undefined
  onChange: (attribute: Filter['attribute'], value: Array<FilterOption['value']>) => void
}

export default function FilterRadio ({ filter, onChange, defaultValue = [] }: Props) {
  const [value, setValue] = useState(defaultValue ?? [])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prevValue) => {
      let updatedList = [...prevValue]
      if (event.target.checked) {
        updatedList = [...prevValue, event.target.value]
      } else {
        updatedList.splice(prevValue.indexOf(event.target.value), 1)
      }

      return updatedList
    })
  }

  useEffect(() => {
    onChange(filter.attribute, value)
  }, [filter.attribute, value, onChange])

  return (
    <>
      {filter.options.map((option, optionIdx) => (
        <div key={option.value} className="flex items-center">
          <input
            id={`${filter.attribute}-${optionIdx}`}
            name={`${filter.attribute}[]`}
            defaultValue={option.value}
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            onChange={handleChange}
            checked={value.includes(option.value.toString())}
          />
          <label htmlFor={`${filter.attribute}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
            {option.name}
          </label>
        </div>
      ))}
    </>
  )
}
