'use client'

import { useCheckoutStore } from '../useCheckoutStore'

export default function EmailAddress () {
  const [email, setEmail] = useCheckoutStore((state) => [state.email, state.setEmail])
  return (
    <>
      <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
        Correo electrónico
      </label>
      <div className="mt-1">
        <input
          type="email"
          id="email-address"
          autoComplete="email"
          className="block w-full rounded-md border border-neutral-300 shadow-2xs focus:border-primary-500 focus:ring-primary-500 p-2 sm:text-sm"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
    </>
  )
}
