'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { FloatingSearchBox } from './floating-search-box'
import { usePathname } from 'next/navigation'

type Props = {
  iconClassName?: string
  inputClassName?: string
}

export const SearchBoxSimple = ({ iconClassName, inputClassName }: Props) => {
  const [show, setShow] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setShow(false)
  }, [pathname])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShow(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      <button className="flex items-center" onClick={() => setShow(true)} aria-label='Buscar'>
        <MagnifyingGlassIcon className={clsx(twMerge(
          'h-6 w-6 text-neutral-400 group-focus:text-neutral-900',
          iconClassName
        ))} aria-hidden="true" />
      </button>
      {show && <FloatingSearchBox
        inputClassName={inputClassName}
        onClose={() => setShow(false)}
      />
      }
    </>
  )
}

export default SearchBoxSimple
