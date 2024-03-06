'use client'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import type { Brand } from 'api'
import Link from 'next/link'
import clsx from 'clsx'
import CategorySubLevel from './desktop/CategorySubLevel'
import { ProductCategory } from '@medusajs/medusa'

type Props = {
  navigation: {
    categories: Array<ProductCategory>
    brands: Array<Brand>
    pages: Array<{ name: string, href: string }>
  }
}

export default function Navigation ({ navigation }: Props) {
  return (
    <div className="bg-white hidden lg:block">
      <header className="relative">
        <nav aria-label="Top">
          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div>
                <div className="flex h-16 items-center justify-between">
                  <div className="h-full flex w-full">
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
                                    <CategorySubLevel category={category} onClick={close} />
                                  </Popover.Panel>
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
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </Link>
                        ))}
                      </div>
                    </Popover.Group>
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
