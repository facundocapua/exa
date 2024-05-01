import type { CartWithCheckoutStep } from 'api'
import { compareAddresses } from '../../../utils/address'

type Props = {
  cart: CartWithCheckoutStep
}
export default function AddressInfo ({ cart }: Props) {
  const sameAsBilling = cart?.shipping_address && cart?.billing_address ? compareAddresses(cart?.shipping_address, cart?.billing_address) : true
  return (
    <div className='grid grid-cols-3 gap-4 text-sm'>
      <div>
        <h4 className='font-medium'>Dirección de envío</h4>
        <div className='opacity-70'>
          <p>{cart?.shipping_address?.first_name} {cart?.shipping_address?.last_name}</p>
          <p>{cart?.shipping_address?.address_1}</p>
          <p>{cart?.shipping_address?.city} - {cart?.shipping_address?.province}</p>
          <p>{cart?.shipping_address?.postal_code}</p>
        </div>
      </div>
      <div>
        <h4 className='font-medium'>Contacto</h4>
        <div className='opacity-70'>
          <p>{cart?.shipping_address?.phone}</p>
          <p>{cart.email}</p>
        </div>
      </div>
      <div>
        <h4 className='font-medium'>Dirección de facturación</h4>
        <div className='opacity-70'>
          {
            sameAsBilling
              ? 'Misma que la de envío'
              : (
                <>
                  <p>{cart?.billing_address?.first_name} {cart?.billing_address?.last_name}</p>
                  <p>{cart?.billing_address?.address_1}</p>
                  <p>{cart?.billing_address?.city} - {cart?.billing_address?.province}</p>
                  <p>{cart?.billing_address?.postal_code}</p>
                </>
                )
          }
        </div>
      </div>
    </div>
  )
}
