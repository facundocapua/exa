'use client'

import type { CartWithCheckoutStep } from 'api'
import Input from '../../form/input'
import StateSelector from '../../form/state-selector'
import { useState } from 'react'
import Checkbox from '../../form/checkbox'

type Props = {
  cart: CartWithCheckoutStep
  sameAsBilling: boolean
  onSameAsBillingChange: (value: boolean) => void
}

export default function ShippingInformation ({ cart, sameAsBilling, onSameAsBillingChange }: Props) {
  const [shippingAddress, setShippingAddress] = useState({
    'shipping_address.first_name': cart?.shipping_address?.first_name || '',
    'shipping_address.last_name': cart?.shipping_address?.last_name || '',
    'shipping_address.address_1': cart?.shipping_address?.address_1 || '',
    'shipping_address.company': cart?.shipping_address?.company || '',
    'shipping_address.postal_code': cart?.shipping_address?.postal_code || '',
    'shipping_address.city': cart?.shipping_address?.city || '',
    // 'shipping_address.country_code':
    //   cart?.shipping_address?.country_code || countryCode || '',
    'shipping_address.province': cart?.shipping_address?.province || '',
    email: cart?.email || '',
    'shipping_address.phone': cart?.shipping_address?.phone || ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShippingAddress({
      ...shippingAddress,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Input
          label="Nombre"
          id="shipping_address.first_name"
          name="shipping_address.first_name"
          required={true}
          autoComplete="given-name"
          value={shippingAddress['shipping_address.first_name']}
          onChange={handleChange}
        />

        <Input
          label="Apellido"
          id="shipping_address.last_name"
          name="shipping_address.last_name"
          required={true}
          autoComplete="family-name"
          value={shippingAddress['shipping_address.last_name']}
          onChange={handleChange}
        />
      </div>

      <Input
        label="Dirección"
        id="shipping_address.address_1"
        name="shipping_address.address_1"
        required={true}
        autoComplete="shipping address-line1"
        value={shippingAddress['shipping_address.address_1']}
        onChange={handleChange}
      />

      <div className='flex flex-wrap md:flex-nowrap gap-4'>
        <Input
          label="Ciudad"
          id="shipping_address.city"
          name="shipping_address.city"
          required={true}
          autoComplete="shipping address-level2"
          containerClassName='basis-[calc(50%-8px)] md:basis-1/3 order-1'
          value={shippingAddress['shipping_address.city']}
          onChange={handleChange}
        />

        <StateSelector
          containerClassName='flex-1 order-3 md:order-2 md:flex-initial'
          placeholder='Provincia'
          id='shipping_address.province'
          name='shipping_address.province'
          value={shippingAddress['shipping_address.province']}
          onChange={handleChange}
        />

        <Input
          label="Código postal"
          id="shipping_address.postal_code"
          name="shipping_address.postal_code"
          required={true}
          autoComplete="shipping postal-code"
          containerClassName='basis-[calc(50%-8px)] md:basis-1/3 order-2 md:order-3'
          value={shippingAddress['shipping_address.postal_code']}
          onChange={handleChange}
        />
      </div>

      <div>
        <Checkbox
          label="Misma dirección de facturación"
          type="checkbox"
          id="same_as_billing"
          name="same_as_billing"
          containerClassName='my-4'
          checked={sameAsBilling}
          value="on"
          onChange={() => onSameAsBillingChange(!sameAsBilling)}
        />
      </div>

      <div className="flex gap-4">
        <Input
          label="Email"
          name="email"
          type="email"
          title="Ingrese un email válido"
          autoComplete="email"
          value={shippingAddress.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex gap-4">
        <Input
          label="DNI"
          name="shipping_address.company"
          id="shipping_address.company"
          type="text"
          value={shippingAddress['shipping_address.company']}
          onChange={handleChange}
          required
        />
        <Input
          label="Teléfono / Celular"
          id="shipping_address.phone"
          name="shipping_address.phone"
          autoComplete="tel"
          value={shippingAddress['shipping_address.phone']}
          required={true}
          onChange={handleChange}
          type='tel'
        />
      </div>
    </div>
  )
}
