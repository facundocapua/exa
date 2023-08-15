'use client'

import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import type { Brand, Category } from 'api'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

type Props = {
  navigation: {
    categories: Array<Category>
    brands: Array<Brand>
    pages: Array<{ name: string, href: string }>
  }
}

export default function Navigation ({ navigation }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Cerrar menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className='px-4'>
                  {navigation.categories.map((category) => (
                    <Disclosure key={category.name}>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className={
                            clsx(
                              open ? 'border-primary-600 text-primary-600' : 'border-transparent text-neutral-900',
                              'flex w-full whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }>
                            {category.name}
                          </Disclosure.Button>
                          <Transition
                            show={open}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                            className="overflow-hidden transition-all"
                          >
                            <Disclosure.Panel className="space-y-12 px-4 py-6" static>
                              <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                {category.children.map((item) => (
                                  <Link href={`/${item.slug}`} key={item.name} className="group relative" onClick={() => setOpen(false)}>
                                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-neutral-100 group-hover:opacity-75">
                                      <Image src={item.image} alt={item.description} className="object-cover object-center" width={280} height={280} />
                                    </div>
                                    <h3 className="mt-6 block text-sm font-medium text-neutral-900">
                                      <span className="absolute inset-0 z-10" aria-hidden="true" />
                                      {item.name}
                                    </h3>
                                  </Link>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ))}
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className={
                            clsx(
                              open ? 'border-primary-600 text-primary-600' : 'border-transparent text-neutral-900',
                              'flex w-full whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }>
                          Marcas
                        </Disclosure.Button>
                        <Transition
                          show={open}
                          enter="transition duration-100 ease-out"
                          enterFrom="transform scale-95 opacity-0"
                          enterTo="transform scale-100 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform scale-100 opacity-100"
                          leaveTo="transform scale-95 opacity-0"
                        >
                          <Disclosure.Panel className="space-y-12 px-4 py-6" static>
                            <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                              {navigation.brands.map((item) => (
                                <Link href={`/brand/${item.slug}`} key={item.name} className="group relative" onClick={() => setOpen(false)}>
                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md  group-hover:opacity-75">
                                    <Image src={item.image} alt={item.name} className="object-cover object-center" width={280} height={280} />
                                  </div>
                                  <h3 className="mt-6 block text-sm font-medium text-neutral-900">
                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                    {item.name}
                                  </h3>
                                </Link>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                </div>

                <div className="space-y-6 border-t border-neutral-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href} className="-m-2 block p-2 font-medium text-neutral-900" onClick={() => setOpen(false)}>
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  <div className="hidden h-full lg:flex w-full">
                    {/* Flyout menus */}
                    <Popover.Group className="inset-x-0 bottom-0 w-full">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open, close }) => (
                              <>
                                <div className="relative flex">
                                  <Popover.Button
                                    className={clsx(
                                      open
                                        ? 'border-primary-600 text-primary-600'
                                        : 'border-transparent text-neutral-700 hover:text-neutral-800',
                                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-none focus:outline-none'
                                    )}
                                  >
                                    {category.name}
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
                                    <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                    <div className="relative bg-white">
                                      <div className="mx-auto max-w-7xl px-8">
                                        <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                          {category.children.map((item) => (
                                            <Link key={item.name} href={`/${item.slug}`} className="group relative" onClick={close}>
                                              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75 transition-all duration-150 ease-in-out">
                                                <Image
                                                  src={item.image}
                                                  alt={item.description}
                                                  className="object-cover object-center"
                                                  width="280"
                                                  height="280"
                                                />
                                              </div>
                                              <div className="mt-4 block font-medium text-gray-900">
                                                <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                {item.name}
                                              </div>
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
                        ))}

                        <Popover className="flex">
                          {({ open, close }) => (
                            <>
                              <div className="relative flex">
                                <Popover.Button
                                    className={clsx(
                                      open
                                        ? 'border-primary-600 text-primary-600'
                                        : 'border-transparent text-neutral-700 hover:text-neutral-800',
                                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-none focus:outline-none'
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
                                  <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                  <div className="relative bg-white">
                                    <div className="mx-auto max-w-7xl px-8">
                                      <div className="grid grid-cols-5 gap-y-12 py-16">
                                        {navigation.brands.map((item) => (
                                          <Link key={item.name} href={`/brand/${item.slug}`} className="group relative" onClick={close}>
                                            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md group-hover:opacity-75 transition-all duration-150 ease-in-out">
                                              <Image
                                                  src={item.image}
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

                        {navigation.pages.map((page) => (
                          <Link
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Group>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden">
                    <button
                      type="button"
                      className="-ml-2 rounded-md bg-white p-2 text-neutral-400"
                      onClick={() => setOpen(true)}
                    >
                      <span className="sr-only">Abrir menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}
