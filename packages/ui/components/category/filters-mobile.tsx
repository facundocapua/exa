'use client'

import { Dialog, DialogBackdrop, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { AdjustmentsHorizontalIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import { FILTER_TYPE, type Filter } from 'api'
import { useEffect, useState } from 'react'
import FilterRadio from './FilterRadio'
import FilterRange from './FilterRange'
import { useSearchParams } from 'next/navigation'

type Props = {
  count: number
  filters: Array<Filter>
}

export const FiltersMobile = ({ count, filters }: Props) => {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    setFiltersOpen(false)
  }, [searchParams])

  return (
    <div>
      <div className='flex justify-between'>
        <p className='text'>{count} <span className='text-primary-600/80 dark:text-primary-400/80 text-sm'>{count === 1 ? 'producto' : 'productos'}</span></p>
        <button
          type="button"
          onClick={() => setFiltersOpen(true)}
          className="flex justify-center items-center gap-2 border border-black dark:border-gray-100 py-1 px-2 text-sm rounded-md font-medium text-gray-700 dark:text-gray-200"
        >
          Filtrar <AdjustmentsHorizontalIcon className='w-4 h-4' />
        </button>
      </div>

      <Dialog open={filtersOpen} onClose={setFiltersOpen} className="relative z-40 sm:hidden">
        <DialogBackdrop
        transition
        className="fixed inset-0 bg-black dark:bg-white dark:bg-opacity-25 bg-opacity-25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
      />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white dark:bg-black py-4 pb-6 shadow-xl transition duration-300 ease-in-out data-closed:translate-x-full"
            >
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Filtros</h2>
              <button
                  type="button"
                  onClick={() => setFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white dark:bg-black p-2 text-gray-400 dark:text-gray-200  focus:outline-hidden"
                >
                <span className="sr-only">Cerrar filtros</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Filters */}
            <form className="mt-4">
              {filters.map((section) => (
                <RenderFilter key={section.name} filter={section} />
              ))}
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}

const RenderFilter = ({ filter }: {filter: Filter}) => {
  if (filter.options.length <= 1 || filter.options[0]!.value === filter.options[1]!.value) {
    return null
  }

  return (
    <Disclosure key={filter.name} as="div" className="border-t border-gray-200 dark:border-gray-700 px-4 py-6">
      <h3 className="-mx-2 -my-3 flow-root">
        <DisclosureButton className="group flex w-full items-center justify-between bg-white dark:bg-black px-2 py-3 text-sm text-gray-400 dark:text-gray-300">
          <span className="font-medium text-gray-900 dark:text-gray-100">{filter.name}</span>
          <span className="ml-6 flex items-center">
            <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 rotate-0 transform group-data-open:-rotate-180"
              />
          </span>
        </DisclosureButton>
      </h3>
      <DisclosurePanel className="pt-6">
        <div className="space-y-6">
          {filter.type === FILTER_TYPE.RADIO && (<FilterRadio filter={filter} />)}
          {filter.type === FILTER_TYPE.RANGE && (<FilterRange filter={filter} />)}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}

export default FiltersMobile
