'use client'
import Link from 'next/link'
import Logo from './logo'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { navigation } from '@/utils/navigation'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { SearchBoxSimple } from 'ui/components/search-box/search-box-simple'
import { SearchBoxMobile } from 'ui/components/search-box/search-box-mobile'

type Props = {
  cart: React.ReactNode
}

export default function Header ({ cart }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className={clsx(
      'pt-4 pb-8 w-full',
      {
        'bg-secondary-100': pathname === '/',
        'bg-white': pathname !== '/'
      }
    )}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-[1fr_auto_200px] w-full px-4 items-center">

        <Logo />

        <nav className="hidden lg:flex gap-8">
          {navigation.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={clsx(
                'whitespace-nowrap uppercase font-custom text-sm text-primary-600 border-b-2',
                {
                  'border-transparent hover:border-primary-600': pathname !== item.href,
                  'border-primary-600': pathname === item.href
                }
              )}
            >{item.name}</Link>
          ))}
        </nav>

        <div className='flex justify-end items-center gap-8'>
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Bars3Icon className="h-8 w-8" aria-hidden="true" />
            </button>
          </div>
          <div className='hidden lg:block'>
            <SearchBoxSimple
              iconClassName='text-gray-700'
              inputClassName='text-gray-500 focus:border-b-primary-500'
            />
          </div>
          <div>
            {cart}
          </div>
        </div>
      </div>

      <Transition show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
          <TransitionChild
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
           >
            <div className="fixed inset-0 bg-white bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 z-40 flex">
            <TransitionChild
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex justify-between px-4 pb-2 pt-5">
                  <Logo centered={false} />
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-primary-400"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Cerrar menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </button>
                </div>

                <div className='flex p-4'>
                  <SearchBoxMobile
                    iconClassName='text-secondary-600'
                    inputClassName='text-secondary-600 focus:border-b-primary-400'
                  />
                </div>

                <div className="mt-6 space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base leading-7 text-primary-600 uppercase text-custom"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </header>
  )
}
