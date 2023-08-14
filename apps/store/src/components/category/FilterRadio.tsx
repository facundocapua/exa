import type { Filter, FilterOption } from 'api'

type Props = {
  filter: Filter
  onChange: (attribute: Filter['attribute'], value: FilterOption['value']) => void
}

export default function FilterRadio ({ filter }: Props) {
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
          />
          <label htmlFor={`${filter.attribute}-${optionIdx}`} className="ml-3 text-sm text-gray-600">
            {option.name}
          </label>
        </div>
      ))}
    </>
  )
}
