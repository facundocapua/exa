import { Popover, Transition } from '@headlessui/react'
import type { Brand } from 'api'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'

type Props = {
  brands: Array<Brand>
}

export default function BrandNavigation ({ brands }: Props) {
  return (
    <Popover className="flex">
      {({ open, close }) => (
        <>
          <div className="relative flex">
            <Popover.Button
                className={clsx(
                  open
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-neutral-700 hover:text-neutral-800',
                  'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-hidden focus:outline-hidden'
                )}
              >
              Marcas
            </Popover.Button>
          </div>

          <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
            <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500 z-20">
              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
              <div className="absolute inset-0 top-1/2 bg-white shadow-sm" aria-hidden="true" />

              <div className="relative bg-white">
                <div className="mx-auto max-w-7xl px-8">
                  <div className="grid grid-cols-5 gap-y-12 py-16">
                    {brands.map((item) => (
                      <Link key={item.name} href={`/brand/${item.handle}`} className="group relative" onClick={close}>
                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md group-hover:opacity-75 transition-all duration-150 ease-in-out">
                          <Image
                            src={item.logo}
                            alt={item.name}
                            className="object-cover object-center m-auto"
                            width="80"
                            height="80"
                          />
                        </div>
                        <h4 className="mt-4 block font-medium text-gray-900 text-center">
                          <span className="absolute inset-0 z-10" aria-hidden="true" />
                          {item.name}
                        </h4>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  )
}
