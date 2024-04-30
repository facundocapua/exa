import { forwardRef, useImperativeHandle, useRef } from 'react'
import type { NativeSelectProps } from './native-select'
import NativeSelect from './native-select'
import { states } from 'api'

const StateSelector = forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ placeholder = 'Provincia', defaultValue, ...props }, ref) => {
    const innerRef = useRef<HTMLSelectElement>(null)

    useImperativeHandle<HTMLSelectElement | null, HTMLSelectElement | null>(
      ref,
      () => innerRef.current
    )

    return (
      <NativeSelect
        ref={innerRef}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...props}
      >
        {states.map((state) => (
          <option key={state.id} value={state.name}>{state.name}</option>
        ))}
      </NativeSelect>
    )
  }
)

StateSelector.displayName = 'StateSelector'

export default StateSelector
