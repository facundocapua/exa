'use client'

import type { Product } from 'api'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { addItem } from '../cart/actions'

import type {} from 'react/experimental'

type Props = {
  sku: Product['sku']
}

export default function ProductAddToCart ({ sku }: Props) {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const handleAddToCart = () => {
    startTransition(async () => {
      const error = await addItem(sku)

      if (error) {
        // Trigger the error boundary in the root error.js
        throw new Error(error.toString())
      }

      router.refresh()
    })
  }

  return (
    <button
      aria-label="Agregar al carrito"
      disabled={isPending}
      type="button"
      className="flex items-center justify-center rounded-md bg-primary-600 px-8 py-4 text-base font-medium text-white hover:bg-primary-700 focus:outline-none sm:w-full my-8"
      onClick={handleAddToCart}
    >
      Agregar al carrito
    </button>
  )
}
