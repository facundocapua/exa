import type { CartWithCheckoutStep } from 'api'
import { formatPrice } from '../../../utils/price'

type Props = {
  cart: CartWithCheckoutStep
}

export default function ShippingInfo ({ cart }: Props) {
  return (
    <div>
      <div className="text-sm">
        {cart && cart.shipping_methods[0] && (
          <div className="flex flex-col w-1/3">
            <h4 className='font-medium'>Método de envío</h4>
            <p className="opacity-70">
              {cart.shipping_methods[0].shipping_option.name} (
              {formatPrice(cart.shipping_methods[0].price / 100)
                .replace(/,/g, '')
                .replace(/\./g, ',')}
              )
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
