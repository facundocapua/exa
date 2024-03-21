import type { Cart } from 'api'
import Image from 'next/image'
import Price from '../generic/Price'
import EditItemQuantityButton from '../cart/EditItemQuantityButton'

type Props = {
  cart: Cart
}

export default function OrderSummary ({ cart }: Props) {
  return (
    <section aria-labelledby="summary-heading" className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex h-fit">
      <h2 id="summary-heading" className="sr-only">
        Resumen de compra
      </h2>

      <ul role="list" className="flex-auto divide-y divide-gray-200 overflow-y-auto px-6">
        {cart.items.map((line) => (
          <li key={line.id} className="flex space-x-6 py-6 justify-between">
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
                  amount={Number(line.subtotal)}
                />
                {line.original_total !== line.subtotal && (
                  <Price
                    className="flex justify-end space-y-2 text-right text-sm line-through text-neutral-500 dark:text-neutral-400"
                    amount={Number(line.original_total)}
                  />
                )}
                <div className="ml-auto flex h-9 flex-row items-center rounded-full border max-w-[98px] border-neutral-200 dark:border-neutral-700">
                  <EditItemQuantityButton item={line} type="minus" />
                  <p className="w-6 text-center">
                    <span className="w-full text-sm">{line.quantity}</span>
                  </p>
                  <EditItemQuantityButton item={line} type="plus" />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="sticky bottom-0 flex-none border-t border-gray-200 bg-gray-50 p-6">
        <dl className="mt-10 space-y-6 text-sm font-medium text-gray-500">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd className="text-gray-900">
              <Price amount={Number(cart.subtotal)} />
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="flex">
              Descuento
            </dt>
            <dd className="text-gray-900">
              <Price amount={-Number(cart.discount_total)} />
            </dd>
          </div>
          {cart.shipping_total && (
            <div className="flex justify-between">
              <dt>Envio</dt>
              <dd className="text-gray-900">
                <Price amount={cart.shipping_total} />
              </dd>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
            <dt className="text-base">Total</dt>
            <dd className="text-base">
              <Price amount={Number(cart.total)} />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
