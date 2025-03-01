import clsx from 'clsx'
import type { InputHTMLAttributes } from 'react'
import { forwardRef, useImperativeHandle, useRef } from 'react'

type InputProps = Omit<
  Omit<InputHTMLAttributes<HTMLInputElement>, 'size'>,
  'placeholder'
> & {
  label: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
  name: string
  containerClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const { label, containerClassName, ...inputProps } = props
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => inputRef.current!)
    return (
      <div className={clsx(
        'relative w-full',
        containerClassName
      )}>
        <input
          type="text"
          className={clsx(
            'peer h-11 rounded-md shadow-xs ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-primary-600 px-4 pt-3 w-full text-sm',
            'bg-neutral-50 transition-all duration-200 ease-in-out hover:bg-neutral-100 focus-within:bg-neutral-100',
            'dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:focus-within:bg-neutral-900 dark:ring-gray-600 dark:focus-within:ring-primary-400'
          )}
          placeholder=' '
          {...inputProps}
        />
        <label
        htmlFor={inputProps.id}
        className={clsx(
          'absolute left-4 top-1 text-neutral-600 text-xs transition-all pointer-events-none',
          'peer-placeholder-shown:text-sm peer-placeholder-shown:text-black peer-placeholder-shown:top-3',
          'peer-focus:top-1 peer-focus:text-neutral-600 peer-focus:text-xs',
          'dark:text-neutral-400 dark:peer-placeholder-shown:text-neutral-400 dark:peer-focus:text-neutral-400'
        )}>
          {label}
          {inputProps.required && <span className='text-red-500 dark:text-red-400'>*</span>}
        </label>
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
