import type { Cart } from 'api'
import Image from 'next/image'
import Price from '../Price'
import EditItemQuantityButton from '../cart/EditItemQuantityButton'

type Props = {
  cart: Cart
}

export default function OrderSummary ({ cart }: Props) {
  return (
    <section aria-labelledby="summary-heading" className="hidden w-full max-w-md flex-col bg-gray-50 lg:flex">
      <h2 id="summary-heading" className="sr-only">
        Resumen de compra
      </h2>

      <ul role="list" className="flex-auto divide-y divide-gray-200 overflow-y-auto px-6">
        {cart.lines.map((line) => (
          <li key={line.sku} className="flex space-x-6 py-6 justify-between">
            <Image
              src={line.product.images[0]}
              alt={line.product.name}
              width={175}
              height={175}
              className="h-40 w-40 flex-none rounded-md bg-gray-200 object-cover object-center"
            />
            <div className="flex flex-col justify-between space-y-4">
              <div className="space-y-1 text-sm font-medium">
                <h3 className="text-gray-900">{line.product.name}</h3>
                <Price
                  className="flex justify-end space-y-2 text-right text-sm"
                  amount={line.salePrice}
                />
                {line.price !== line.salePrice && (
                  <Price
                    className="flex justify-end space-y-2 text-right text-sm line-through text-neutral-500 dark:text-neutral-400"
                    amount={line.price}
                  />
                )}
                <div className="ml-auto flex h-9 flex-row items-center rounded-full border max-w-[98px] border-neutral-200 dark:border-neutral-700">
                  <EditItemQuantityButton item={line} type="minus" />
                  <p className="w-6 text-center">
                    <span className="w-full text-sm">{line.qty}</span>
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
              <Price amount={cart.cost.subtotal} />
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="flex">
              Descuento
            </dt>
            <dd className="text-gray-900">
              <Price amount={-cart.cost.discount} />
            </dd>
          </div>
          {cart.cost.shipping > 0 && (
            <div className="flex justify-between">
              <dt>Envio</dt>
              <dd className="text-gray-900">
                <Price amount={cart.cost.shipping} />
              </dd>
            </div>
          )}

          <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
            <dt className="text-base">Total</dt>
            <dd className="text-base">
              <Price amount={cart.cost.total} />
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
