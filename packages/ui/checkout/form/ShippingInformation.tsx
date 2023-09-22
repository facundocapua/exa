'use client'

import { states } from 'api'
// import { useCheckoutStore } from '../useCheckoutStore'

export default function ShippingInformation () {
  // const [shippingAddress, setShippingAddress] = useCheckoutStore((state) => [state.shippingAddress, state.setShippingAddress])

  // const handleChangeState = (stateId: State['id']) => {
  //   const newShippingAddress = structuredClone(shippingAddress)
  //   newShippingAddress.state = getState(stateId) as State

  //   setShippingAddress(newShippingAddress)
  // }

  return (
    <section className="mt-12">
      <h2 className='font-semibold text-neutral-700 text-xl mb-2'>Dirección de envío</h2>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col basis-1/2">
            <label htmlFor="firstname" className="text-sm text-neutral-500">Nombre</label>
            <input
              type="text"
              id="firstname"
              autoComplete="given-name"
              className="block w-full rounded-md border border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 sm:text-sm"
            />
          </div>

          <div className="flex flex-col basis-1/2">
            <label htmlFor="lastname" className="text-sm text-neutral-500">Apellido</label>
            <input
              type="text"
              id="lastname"
              autoComplete="family-name"
              className="block w-full rounded-md border border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 sm:text-sm"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="shipping-address" className="text-sm text-neutral-500">Dirección</label>
          <input
            type="text"
            id="shipping-address"
            autoComplete="shipping address-line1"
            className="block w-full rounded-md border border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 sm:text-sm"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="shipping-additional" className="text-sm text-neutral-500">Información adicional (ej.: depto. 201)</label>
          <input
            type="text"
            id="shipping-additional"
            autoComplete="shipping address-line2"
            className="block w-full rounded-md border border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 sm:text-sm"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col basis-1/3">
            <label htmlFor="shipping-city" className="text-sm text-neutral-500">Ciudad</label>
            <input
              type="text"
              id="shipping-city"
              autoComplete="shipping address-level2"
              className="block w-full rounded-md border border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 sm:text-sm"
            />
          </div>

          <div className="flex flex-col basis-1/3">
            <label htmlFor="lastname" className="text-sm text-neutral-500">Provincia</label>
            <select className="block w-full rounded-md border border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 sm:text-sm">
              <option value="" disabled>Seleccionar</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col basis-1/3">
            <label htmlFor="shipping-postalcode" className="text-sm text-neutral-500">Código postal</label>
            <input
              type="text"
              id="shipping-postalcode"
              autoComplete="shipping postal-code"
              className="block w-full rounded-md border border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 p-2 sm:text-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
