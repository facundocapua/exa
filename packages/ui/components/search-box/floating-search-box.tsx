'use client'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { usePathname, useRouter } from 'next/navigation'
import type { ChangeEventHandler, FormEventHandler } from 'react'
import { useCallback, useEffect, useState } from 'react'
import { executeSearch } from './actions'
import type { Product } from 'api'
import SearchResults from './search-results'
import debounce from 'just-debounce-it'
import { twMerge } from 'tailwind-merge'
import { XMarkIcon } from '@heroicons/react/24/outline'

type Props = {
  inputClassName?: string
  onClose: () => void
}

export const FloatingSearchBox = ({ inputClassName, onClose }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const [search, setSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [results, setResults] = useState<Product[]>([])

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value)
  }

  const dbSearch = useCallback(
    debounce(() => {
      const searchAction = async (q: string) => {
        const result = await executeSearch(q)
        setResults(result)
        setIsLoading(false)
      }
      searchAction(search)
      console.log('searching for:', search)
    }, 500),
    [search])

  useEffect(() => {
    if (!search) {
      setResults([])
      return
    }
    setIsLoading(true)
    dbSearch()
    return () => dbSearch.cancel()
  }, [search])

  useEffect(() => {
    setResults([])
    setSearch('')
  }, [pathname])

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    router.push(`/search/${search}`)
  }

  return (
    <>
      <div className='absolute left-0 right-0 bottom-0 top-0 backdrop-blur z-10'></div>
      <div className='absolute z-20 rounded-xl bg-white p-8 top-4 left-1/2 -translate-x-1/2 w-1/3 drop-shadow-md max-h-[600px]'>
        <button className="flex items-center absolute top-2 right-2" onClick={() => onClose()}>
          <XMarkIcon className='w-6 h-6' />
        </button>
        <form className="w-full" onSubmit={handleSubmit}>
          <label htmlFor="search" className="sr-only">
            Buscar
          </label>
          <div className="relative group">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <MagnifyingGlassIcon className={clsx(twMerge(
                'h-5 w-5 text-neutral-400 group-focus:text-neutral-900',
                inputClassName
              ))} aria-hidden="true" />
            </div>
            <input
              id="search"
              name="search"
              autoFocus={true}
              className={clsx(twMerge(
                'block w-full bg-transparent ring-0 outline-none border-b-neutral-400 border-b-2 py-1.5 pl-10 pr-3 text-neutral-900  placeholder:text-neutral-400',
                'focus:ring-0 focus:outline-none focus:border-b-neutral-900',
                inputClassName
              ))}
              placeholder="Buscar"
              type="text"
              onChange={handleChange}
              value={search}
            />
          </div>
          {results.length > 0 && <SearchResults products={results} containerClassName='static max-h-[500px] drop-shadow-none' />}
          {search !== '' && results.length === 0 && !isLoading && (<div className='absolute text-sm z-20 pt-2'>No se encontraron resultados</div>)}
        </form>
      </div>
    </>
  )
}

export default FloatingSearchBox
