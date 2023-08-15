import type { Filter } from 'api'
import clsx from 'clsx'
import { useState } from 'react'
import { Range, getTrackBackground } from 'react-range'
import { Price } from 'ui'

type Props = {
  filter: Filter
  onChange: (attribute: Filter['attribute'], value: Array<number>) => void
  defaultValue?: Array<number> | undefined
}

export default function FilterRange ({ filter, defaultValue, onChange }: Props) {
  const minValue = filter.options[0].value as number
  const maxValue = filter.options[1].value as number

  const [defaultMinValue, defaultMaxValue] = defaultValue ?? [minValue, maxValue]
  const [values, setValues] = useState([defaultMinValue, defaultMaxValue])

  if (minValue === Infinity || maxValue === -Infinity) return null

  const handleChange = (values: Array<number>) => {
    if (values[0] === minValue && values[1] === maxValue) {
      onChange(filter.attribute, [])
      return
    }

    onChange(filter.attribute, values)
  }

  return (
    <Range
      step={1}
      min={minValue}
      max={maxValue}
      values={values}
      onChange={(values) => setValues(values)}
      onFinalChange={handleChange}
      renderTrack={({ props, children }) => {
        return (
          <div
            {...props}
            className='h-1 w-full'
            style={{
              ...props.style,
              // height: '6px',
              // width: '100%',
              background: getTrackBackground({
                values,
                colors: ['rgb(229 231 235)', 'rgb(7 89 133)', 'rgb(229 231 235)'],
                min: minValue,
                max: maxValue
              })
            }}
          >
            {children}
          </div>
        )
      }}
      renderThumb={({ index, props }) => {
        const { key, ...restOfProps } = props
        return (
          <div
            key={key}
            {...restOfProps}
            className='rounded-full w-5 h-5 bg-primary-800'
          >
            <Price amount={values[index]} className={clsx(
              'absolute top-6 text-primary-800 text-xs',
              index === 0 ? 'left-0' : 'right-0'
            )} />
          </div>
        )
      }}
    />
  )
}
