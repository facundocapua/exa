'use client'
import Link from 'next/link'
import Logo from './logo'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { navigation } from '@/utils/navigation'
import NavLink from './nav-link'
import { usePathname } from 'next/navigation'

type Props = {
  cart: React.ReactNode
}


export default function Header ({ cart }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navLeft = navigation.slice(0, 2)
  const navRight = navigation.slice(2, navigation.length)
  const pathname = usePathname()

  return (
    <header className="pt-4 pb-8 bg-gray-600">
      <div className="flex max-w-7xl mx-auto px-4 items-center justify-between">
        <div className="flex lg:hidden">
          <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-gray-100"
              onClick={() => setMobileMenuOpen(true)}
            >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav className="hidden lg:flex max-w-xl mx-auto gap-16 grow items-center justify-center">
          {navLeft.map((item) => (<NavLink key={item.id} href={item.href} name={item.name} active={pathname.startsWith(item.href)} />))}
          <Logo />
          {navRight.map((item) => (<NavLink key={item.id} href={item.href} name={item.name} active={pathname.startsWith(item.href)} />))}
        </nav>

        <div className='flex justify-end'>
          {cart}
        </div>

      </div>

      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
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
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-black pb-12 shadow-xl">
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
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
  )
}
