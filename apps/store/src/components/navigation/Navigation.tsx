'use client'

import { Fragment } from 'react'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel, Transition } from '@headlessui/react'
import type { Brand, Category } from 'api'
import Link from 'next/link'
import clsx from 'clsx'
import CategorySubLevel from './desktop/CategorySubLevel'

type Props = {
  navigation: {
    categories: Array<Category>
    brands: Array<Brand>
    pages: Array<{ name: string, href: string }>
  }
}

export default function Navigation ({ navigation }: Props) {
  return (
    <div className="bg-white hidden lg:block dark:bg-[#121212]">
      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white dark:bg-[#121212]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  <div className="h-full flex w-full">
                    {/* Flyout menus */}
                    <PopoverGroup className="inset-x-0 bottom-0 w-full">
                      <div className="flex h-full justify-center space-x-8">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            {({ open, close }) => (
                              <>
                                <div className="relative flex">
                                  <PopoverButton
                                    className={clsx(
                                      open
                                        ? 'border-primary-600 text-primary-600 dark:text-primary-500 dark:border-primary-500'
                                        : 'border-transparent text-neutral-700 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-300',
                                      'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out outline-hidden focus:outline-hidden'
                                    )}
                                  >
                                    {category.name}
                                  </PopoverButton>
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
                                  <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500 z-20">
                                    <CategorySubLevel category={category} onClick={close} />
                                  </PopoverPanel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                        ))}

                        {/* <BrandNavigation brands={navigation.brands} /> */}

                        {navigation.pages.map((page) => (
                          <Link
                            key={page.name}
                            href={page.href}
                            className="flex items-center font-bold text-gray-500 hover:text-gray-700"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </PopoverGroup>
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
