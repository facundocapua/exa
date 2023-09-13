'use client'

import type { Product } from 'api'
import { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { addItem } from '../cart/actions'

import type {} from 'react/experimental'
import clsx from 'clsx'
import { useProductStore } from './useProductStore'

type Props = {
  sku: Product['sku']
  className?: string
}

export default function ProductAddToCart ({ sku, className }: Props) {
  const [isPending, startTransition] = useTransition()
  const [currentVariant] = useProductStore(state => [state.currentVariant])

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

  if(currentVariant && currentVariant?.stock <= 0){
    return (
      <button
        aria-label="Agregar al carrito"
        disabled
        type="button"
        className={clsx(
          'flex items-center justify-center rounded-md bg-neutral-400 px-8 py-4 text-base font-medium text-white  focus:outline-none sm:w-full',
          className
        )}
      >
        Producto agotado
      </button>
    )
  }

  return (
    <button
      aria-label="Agregar al carrito"
      disabled={isPending}
      type="button"
      className={clsx(
        'flex items-center justify-center rounded-md bg-primary-600 px-8 py-4 text-base font-medium text-white hover:bg-primary-700 focus:outline-none sm:w-full',
        className
      )}
      onClick={handleAddToCart}
    >
      Agregar al carrito
    </button>
  )
}
