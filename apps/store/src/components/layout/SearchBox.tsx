import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

export default function SearchBox () {
  return (
    <div className="w-full sm:max-w-xs">
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
        />
      </div>
    </div>
  )
}
