'use client'

import { useCheckoutStore } from '../useCheckoutStore'

export default function NewsletterSubscription () {
  const [subscribe, setSubscribe] = useCheckoutStore((state) => [state.subscribe, state.setSubscribe])

  return (
    <div className='flex items-center gap-2 mt-2'>
      <input
        type="checkbox"
        id="subscribe"
        name="subscribe"
        className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
        checked={subscribe}
        onChange={() => setSubscribe(!subscribe)}
       />
      <label htmlFor="subscribe" className='text-neutral-600 text-xs'>Quiero recibir el newsletter con promociones</label>
    </div>
  )
}
