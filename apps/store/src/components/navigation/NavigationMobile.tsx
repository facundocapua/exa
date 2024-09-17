'use client'

import { Bars2Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import type { Brand, Category } from 'api'
import clsx from 'clsx'
import Link from 'next/link'
import { Fragment, useEffect, useState } from 'react'
import CategorySubLevel from './mobile/CategorySubLevel'
import { Logo } from '../layout/logo'
import { SearchBoxMobile } from 'ui/components/search-box/search-box-mobile'
import { usePathname } from 'next/navigation'
import { Dialog, Disclosure, DisclosureButton, DisclosurePanel, Transition, TransitionChild } from '@headlessui/react'

type Props = {
  navigation: {
    categories: Array<Category>
    brands: Array<Brand>
    pages: Array<{ name: string, href: string }>
  }
}

export default function NavigationMobile ({ navigation }: Props) {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <TransitionChild
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

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
                <div className="flex justify-between px-4 pb-2 pt-5">
                  <Logo center={false} onClick={() => setOpen(false)} />
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-neutral-700"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Cerrar menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </button>
                </div>

                <div className='flex p-4'>
                  <SearchBoxMobile />
                </div>

                {/* Links */}
                <div className='px-4'>
                  {navigation.categories.map((category) => (
                    <Disclosure key={category.name}>
                      {({ open }) => (
                        <>
                          <DisclosureButton className={clsx(
                            open ? 'border-primary-600 text-primary-600' : 'border-transparent text-neutral-900',
                            'flex w-full whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium justify-between'
                          )}>
                            <span>{category.name}</span>
                            <ChevronDownIcon className={clsx(
                              'w-6 h-6 text-current transition-transform ease-in-out duration-300',
                              open ? 'transform rotate-180' : ''
                            )} />
                          </DisclosureButton>
                          <Transition
                            show={open}
                            enter="transition-[height] ease-in-out duration-300 transform"
                            enterFrom="h-0"
                            enterTo="h-auto"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="h-auto"
                            leaveTo="h-0"
                          >
                            <DisclosurePanel className="space-y-12 px-4 py-6 transition-all overflow-hidden" static>
                              <CategorySubLevel category={category} />
                            </DisclosurePanel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </div>

                <div className="space-y-6 border-t border-neutral-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link href={page.href} className="-m-2 block p-2 font-bold text-gray-500 hover:text-gray-700">
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

      {/* Mobile menu and search (lg-) */}
      <div className="flex flex-1 items-center lg:hidden">
        <button
          type="button"
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Abrir menu</span>
          <Bars2Icon className="h-8 w-8" aria-hidden="true" />
        </button>
      </div>
    </>
  )
}
