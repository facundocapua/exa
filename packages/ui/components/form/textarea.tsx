import clsx from 'clsx'
import type { TextareaHTMLAttributes } from 'react'
import { forwardRef, useImperativeHandle, useRef } from 'react'

type TextareaProps = Omit<
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
  'placeholder'
> & {
  label: string
  errors?: Record<string, unknown>
  touched?: Record<string, unknown>
  name: string
  containerClassName?: string
}

const Textarea = forwardRef<TextareaProps, TextareaProps>(
  (props, ref) => {
    const { label, containerClassName, value, ...inputProps } = props
    const inputRef = useRef<TextareaProps>(null)
    useImperativeHandle(ref, () => inputRef.current!)
    return (
      <div className={clsx(
        'relative w-full',
        containerClassName
      )}>
        <textarea
          className={clsx(
            'peer h-24 rounded-md shadow-2xs ring-1 ring-gray-300 focus-within:ring-2 focus-within:ring-primary-600 px-4 border-t-[20px] border-transparent w-full text-sm',
            'bg-neutral-50 transition-colors duration-200 ease-in-out hover:bg-neutral-100 focus-within:bg-neutral-100'
          )}
          placeholder=' '
          {...inputProps}
        >{value}</textarea>
        <label
        htmlFor={inputProps.id}
        className={clsx(
          'absolute left-4 top-1 text-neutral-600 text-xs transition-all pointer-events-none',
          'peer-placeholder-shown:text-sm peer-placeholder-shown:text-black peer-placeholder-shown:top-3',
          'peer-focus:top-1 peer-focus:text-neutral-600 peer-focus:text-xs'
        )}>
          {label}
          {inputProps.required && <span className='text-red-500'>*</span>}
        </label>
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
