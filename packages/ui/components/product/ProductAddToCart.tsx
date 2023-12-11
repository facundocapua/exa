'use client'

import type { Product } from 'api'
import { useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { addItem } from '../cart/actions'

import type {} from 'react/experimental'
import clsx from 'clsx'

type Props = {
  product: Product
  className?: string
}

export default function ProductAddToCart ({ product, className }: Props) {
  const [isPending, startTransition] = useTransition()
  const searchParams = useSearchParams()
  const currentVariant = searchParams.get('v') ? product.variants?.find(variant => variant.sku === searchParams.get('v')) : null

  const router = useRouter()
  const handleAddToCart = () => {
    startTransition(async () => {
      const error = await addItem(product.sku)

      if (error) {
        // Trigger the error boundary in the root error.js
        throw new Error(error.toString())
      }

      router.refresh()
    })
  }

  if (currentVariant && currentVariant?.stock <= 0) {
    return (
      <button
        aria-label="Agregar al carrito"
        disabled
        type="button"
        className={clsx(
          'flex items-center justify-center md:rounded-md bg-neutral-400 w-full py-4 text-base font-medium text-white focus:outline-none',
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
        'flex items-center justify-center md:rounded-md bg-primary-600 w-full py-4 text-base font-medium text-white hover:bg-primary-700 focus:outline-none',
        className
      )}
      onClick={handleAddToCart}
    >
      Agregar al carrito
    </button>
  )
}
