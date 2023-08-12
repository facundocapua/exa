import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

export default function SearchBox () {
  return (
    <div className="w-full sm:max-w-xs">
      <label htmlFor="search" className="sr-only">
        Buscar
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon className="h-5 w-5 text-neutral-400" aria-hidden="true" />
        </div>
        <input
          id="search"
          name="search"
          className="block w-1/2 bg-transparent ring-0 focus:ring-0 outline-none focus:outline-none border-b-neutral-400 border-b-2 transition-all ease-in-out focus:w-full duration-500  py-1.5 pl-10 pr-3 text-neutral-900  placeholder:text-neutral-400 sm:text-sm sm:leading-6"
          placeholder="Buscar"
          type="search"
        />
      </div>
    </div>
  )
}
