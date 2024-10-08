'use client'
import { Disclosure } from '@headlessui/react'
import type { CartWithCheckoutStep } from 'api'
import Image from 'next/image'
import EditItemQuantityButton from '../cart/EditItemQuantityButton'
import Price from '../generic/Price'

type Props = {
  cart: CartWithCheckoutStep
}

export default function MobileOrderSummary ({ cart }: Props) {
  return (
    <section aria-labelledby="order-heading" className="bg-gray-50 px-4 py-6 sm:px-6 lg:hidden">
      <Disclosure as="div" className="mx-auto max-w-lg">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between">
              <h2 id="order-heading" className="text-lg font-medium text-gray-900">
                Tu pedido
              </h2>
              <Disclosure.Button className="font-medium text-primary-600 hover:text-primary-500">
                {open ? <span>Ocultar detalles</span> : <span>Mostrar detalles</span>}
              </Disclosure.Button>
            </div>

            <Disclosure.Panel>
              <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
                {cart.items.map((line) => (
                  <li key={line.id} className="flex space-x-6 py-6">
                    <Image
                       src={line.variant.product.thumbnail ?? '/product-image-placeholder.svg'}
                       alt={line.variant.product.title}
                       width={175}
                       height={175}
                       className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
                     />
                    <div className="flex flex-col justify-between space-y-4">
                      <div className="space-y-1 text-sm font-medium">
                        <h3 className="text-gray-900">{line.variant.product.title}</h3>
                        <Price
                          className="flex justify-end space-y-2 text-right text-sm"
                          amount={line.subtotal as number}
                        />
                        {line.original_total !== line.subtotal && (
                        <Price
                            className="flex justify-end space-y-2 text-right text-sm line-through text-neutral-500 dark:text-neutral-400"
                            amount={line.original_total as number}
                          />
                        )}
                      </div>
                      <div className="flex space-x-4">
                        <div className="flex border-l border-gray-300 pl-4">
                          <div className="ml-auto flex h-9 flex-row items-center rounded-full border max-w-[98px] border-neutral-200 dark:border-neutral-700">
                            <EditItemQuantityButton item={line} type="minus" />
                            <p className="w-6 text-center">
                              <span className="w-full text-sm">{line.quantity}</span>
                            </p>
                            <EditItemQuantityButton item={line} type="plus" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
                <div className="flex justify-between">
                  <dt>Subtotal</dt>
                  <dd className="text-gray-900">
                    <Price amount={Number(cart.subtotal)} />
                  </dd>
                </div>
                {cart.discount_total
                  ? (<div className="flex justify-between">
                    <dt className="flex items-center">
                      Descuento ({cart.discounts.map((discount, index) => (
                        <span key={discount.id} className="text-xs text-gray-500 dark:text-gray-300">
                          {index > 0 ? ', ' : ''}
                          {discount.rule.description}
                        </span>
                    ))})
                    </dt>
                    <dd className="text-gray-900 dark:text-gray-100">
                      <Price amount={-Number(cart.discount_total)} />
                    </dd>
                  </div>)
                  : null}
                {cart.shipping_total
                  ? (
                    <div className="flex justify-between">
                      <dt>Envio</dt>
                      <dd className="text-gray-900 dark:text-gray-100">
                        <Price amount={cart.shipping_total} />
                      </dd>
                    </div>
                    )
                  : null}
              </dl>
            </Disclosure.Panel>

            <dl className="mt-6 flex items-center justify-between border-t border-gray-200 pt-6 text-sm font-medium text-gray-900">
              <dd className="text-base">Total</dd>
              <dd className="text-base">
                <Price amount={Number(cart.total)} />
              </dd>
            </dl>
          </>
        )}
      </Disclosure>
    </section>
  )
}
