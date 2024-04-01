'use client'

import { CartWithCheckoutStep } from 'api'
import Input from '../../form/input'
import StateSelector from '../../form/state-selector'
import { useState } from 'react'

type Props = {
  cart: CartWithCheckoutStep
}

export default function BillingInformation ({ cart }: Props) {
  const [billingAddress, setBillingAddress] = useState({
    'billing_address.first_name': cart?.billing_address?.first_name || '',
    'billing_address.last_name': cart?.billing_address?.last_name || '',
    'billing_address.address_1': cart?.billing_address?.address_1 || '',
    // 'billing_address.company': cart?.billing_address?.company || '',
    'billing_address.postal_code': cart?.billing_address?.postal_code || '',
    'billing_address.city': cart?.billing_address?.city || '',
    // 'billing_address.country_code':
    //   cart?.billing_address?.country_code || countryCode || '',
    'billing_address.province': cart?.billing_address?.province || '',
    'billing_address.phone': cart?.billing_address?.phone || ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setBillingAddress({
      ...billingAddress,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Input
          label="Nombre"
          id="billing_address.first_name"
          name="billing_address.first_name"
          required={true}
          autoComplete="given-name"
          value={billingAddress['billing_address.first_name']}
          onChange={handleChange}
        />

        <Input
          label="Apellido"
          id="billing_address.last_name"
          name="billing_address.last_name"
          required={true}
          autoComplete="family-name"
          value={billingAddress['billing_address.last_name']}
          onChange={handleChange}
        />
      </div>

      <Input
        label="Dirección"
        id="billing_address.address_1"
        name="billing_address.address_1"
        required={true}
        autoComplete="shipping address-line1"
        value={billingAddress['billing_address.address_1']}
        onChange={handleChange}
      />

      <div className='flex gap-4'>
        <Input
          label="Ciudad"
          id="billing_address.city"
          name="billing_address.city"
          required={true}
          autoComplete="shipping address-level2"
          containerClassName='basis-1/3'
          value={billingAddress['billing_address.city']}
          onChange={handleChange}
        />

        <StateSelector
          placeholder='Provincia'
          id='billing_address.province'
          name='billing_address.province'
          value={billingAddress['billing_address.province']}
          onChange={handleChange}
        />

        <Input
          label="Código postal"
          id="billing_address.postal_code"
          name="billing_address.postal_code"
          required={true}
          autoComplete="shipping postal-code"
          containerClassName='basis-1/3'
          value={billingAddress['billing_address.postal_code']}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}
