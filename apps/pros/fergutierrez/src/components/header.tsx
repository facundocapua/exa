'use client'
import Link from 'next/link'
import Logo from './logo'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { navigation } from '@/utils/navigation'
import NavLink from './nav-link'
import { usePathname } from 'next/navigation'
import { SearchBoxSimple } from 'ui/components/search-box/search-box-simple'
import { SearchBoxMobile } from 'ui/components/search-box/search-box-mobile'

type Props = {
  cart: React.ReactNode
}

export default function Header ({ cart }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLeft = navigation.slice(0, 2)
  const navRight = navigation.slice(2, navigation.length)
  const pathname = usePathname()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className="pt-4 pb-8 bg-neutral-600">
      <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto] w-full items-center px-4">
        <div className="flex lg:hidden">
          <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
            <span className="sr-only">Abrir menú principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="hidden lg:flex max-w-xl mx-auto gap-16 grow items-center justify-center">
          {navLeft.map((item) => (<NavLink key={item.id} href={item.href} name={item.name} active={pathname.startsWith(item.href)} />))}
          <Logo />
          {navRight.map((item) => (<NavLink key={item.id} href={item.href} name={item.name} active={pathname.startsWith(item.href)} />))}
        </nav>

        <div className='flex items-center justify-center lg:hidden'>
          <Logo />
        </div>

        <div className='flex justify-end items-center gap-8'>
          <div className='hidden lg:block'>
            <SearchBoxSimple
              iconClassName='text-gray-100'
              inputClassName='text-gray-500 focus:border-b-gray-500'
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
            <div className="fixed inset-0 bg-neutral-600 bg-opacity-25" />
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
              <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-neutral-600 pb-12 shadow-xl">
                <div className="flex justify-between px-4 pb-2 pt-5">
                  <Logo />
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-neutral-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Cerrar menu</span>
                    <XMarkIcon className="h-8 w-8" aria-hidden="true" />
                  </button>
                </div>

                <div className='flex p-4'>
                  <SearchBoxMobile
                    iconClassName='text-gray-200'
                    inputClassName='text-gray-200 focus:border-b-gray-200'
                  />
                </div>

                <div className="mt-6 space-y-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-100"
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
