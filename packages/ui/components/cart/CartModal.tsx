'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { Fragment, useEffect, useRef, useState } from 'react'
import CloseCart from './CloseCart'
import OpenCart from './OpenCart'
import Price from '../generic/Price'
import type { Cart } from 'api'
import CartItem from './CartItem'

const getTotalQuantity = (cart: Cart | undefined) => {
  if (!cart) return 0
  return cart.items.reduce((acc, item) => acc + item.quantity, 0)
}

type Props = {
  cart: Cart | undefined
  cartIconClassName?: string
}

export default function CartModal ({ cart, cartIconClassName }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const quantityRef = useRef(getTotalQuantity(cart))
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  useEffect(() => {
    // Open cart modal when quantity changes.
    if (getTotalQuantity(cart) !== quantityRef.current) {
      // But only if it's not already open (quantity also changes when editing items in cart).
      if (!isOpen) {
        setIsOpen(true)
      }

      // Always update the quantity reference
      quantityRef.current = getTotalQuantity(cart)
    }
  }, [isOpen, getTotalQuantity(cart), quantityRef])

  return (
    <>
      <OpenCart quantity={getTotalQuantity(cart)} onClick={openCart} className={cartIconClassName} />
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <TransitionChild
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <DialogPanel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-neutral-200 bg-white/80 p-6 text-black backdrop-blur-xl dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-100 md:w-[390px]">
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibold">Mi carrito</p>

                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseCart />
                </button>
              </div>

              {!cart || cart.items.length === 0
                ? (
                  <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                    <ShoppingCartIcon className="h-16" />
                    <p className="mt-6 text-center text-2xl font-bold">Tu carrito está vacío.</p>
                  </div>
                  )
                : (
                  <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                    <ul className="flex-grow overflow-auto py-4">
                      {cart.items.map((item: any, i: number) => {
                        return (
                          <li
                          key={i}
                          className="flex w-full flex-col border-b border-neutral-300 dark:border-neutral-700"
                        >
                            <CartItem item={item} />
                          </li>
                        )
                      })}
                    </ul>
                    <div className="py-4 text-sm text-neutral-500 dark:text-neutral-400">
                      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Subtotal</p>
                        <Price
                          className="text-right dark:text-white"
                          amount={cart.subtotal!}
                        />
                      </div>
                      {cart.discount_total! > 0 && (
                        <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                          <p>Descuentos</p>
                          <Price
                            className="text-right dark:text-white"
                            amount={-cart.discount_total!}
                          />
                        </div>
                      )}
                      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Envío</p>
                        <p className="text-right">Calculado en el próximo paso</p>
                      </div>
                      <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Total</p>
                        <Price
                          className="text-right text-base text-black dark:text-white"
                          amount={cart.total!}
                        />
                      </div>
                    </div>
                    <Link
                      href="/checkout"
                      className="block w-full rounded-full bg-primary-600 uppercase p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100"
                    >
                      Comprar
                    </Link>
                  </div>
                  )}
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}
