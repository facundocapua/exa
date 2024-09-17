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

export const SearchBox = () => {
  const router = useRouter()
  const pathname = usePathname()

  const [search, setSearch] = useState('')
  const [focus, setFocus] = useState(false)
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
    <form className="w-full sm:max-w-xs" onSubmit={handleSubmit} onFocus={() => setFocus(true)}>
      <label htmlFor="search" className="sr-only">
        Buscar
      </label>
      <div className="relative group">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400 group-focus:text-neutral-900" aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          className={clsx(
            'block w-full bg-transparent ring-0 outline-none border-b-neutral-400 border-b-2 py-1.5 pl-10 pr-3 text-neutral-900  placeholder:text-neutral-400',
            'lg:w-1/2 lg:transition-all lg:ease-in-out lg:focus:w-full lg:duration-500  lg:text-sm lg:leading-6',
            'focus:ring-0 focus:outline-none focus:border-b-neutral-900'
          )}
          placeholder="Buscar"
          type="search"
          onChange={handleChange}
          value={search}
        />
      </div>
      {results.length > 0 && focus && <SearchResults products={results} />}
      {search !== '' && results.length === 0 && !isLoading && (<div className='absolute text-sm z-20 pt-2'>No se encontraron resultados</div>)}
    </form>
  )
}

export default SearchBox
