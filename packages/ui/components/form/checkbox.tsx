import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef, useImperativeHandle, useRef } from 'react'

type InputProps = Omit<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
  'placeholder'
> & {
  label: string
  containerClassName?: string
}

const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { label, containerClassName, ...inputProps } = props
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => inputRef.current!)
    return (
      <div className={clsx(
        'flex items-center gap-2 w-full',
        containerClassName
      )}>
        <input
        type="checkbox"
        placeholder=' '
        {...inputProps}
      />
        <label
        htmlFor={inputProps.id}
        className="text-black text-sm transition-all dark:text-neutral-100">
          {label}
          {inputProps.required && <span className='text-red-500 dark:text-red-400'>*</span>}
        </label>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
