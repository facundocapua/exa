'use client'

import type { Product } from 'api'
import { useTransition } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { addItem } from '../cart/actions'

import type {} from 'react/experimental'
import clsx from 'clsx'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { sendGAEvent } from '@next/third-parties/google'
import { extractProductInfo } from '../ga/utils'

type Props = {
  product: Product
  isProductPage?: boolean
  className?: string
  buttonClassName?: string
}

export default function ProductAddToCart ({ product, isProductPage, className, buttonClassName }: Props) {
  const [isPending, startTransition] = useTransition()
  const searchParams = useSearchParams()
  const currentVariant = searchParams.get('v')
    ? product.variants?.find(variant => variant.sku === searchParams.get('v'))
    : (product.variants.length === 1 ? product.variants[0] : null)

  const router = useRouter()
  const handleAddToCart = () => {
    if (!currentVariant) return

    startTransition(async () => {
      const error = await addItem(currentVariant.id ?? '')

      sendGAEvent('event', 'add_to_cart', {
        currency: 'ARS',
        value: product.salePrice,
        items: [
          extractProductInfo(product)
        ]
      })

      if (error) {
        console.error(error)
        // Trigger the error boundary in the root error.js
        throw new Error(error.toString())
      }

      router.refresh()
    })
  }

  if (currentVariant && currentVariant?.inventory_quantity <= 0) {
    return (
      <div className={className}>
        <span className='text-xs'>&nbsp;</span>
        <button
          aria-label="Product agotado"
          aria-disabled
          disabled
          type="button"
          className={clsx(twMerge(
            'flex items-center justify-center md:rounded-md bg-neutral-400 w-full py-4 text-base font-medium text-white focus:outline-none',
            buttonClassName
          ))}
        >
          Producto agotado
        </button>
      </div>
    )
  }

  if (!isProductPage && product.variants.length > 1) {
    return (
      <>
        <span className='text-xs'>&nbsp;</span>
        <Link
          href={`/product/${product.handle}`}
          className={clsx(twMerge(
            'flex items-center justify-center md:rounded-md bg-primary-700 w-full py-4 text-base font-medium text-white hover:bg-primary-600 focus:outline-none',
            buttonClassName
          ))}>
          Comprar
        </Link>
      </>
    )
  }

  return (
    <div className={className}>
      { isProductPage && !currentVariant
        ? (<span className='text-sm text-primary-700'>Primero debes seleccionar una opción de arriba</span>)
        : (<span className='text-xs'>&nbsp;</span>) }
      <button
        aria-label="Agregar al carrito"
        disabled={isPending || (isProductPage && !currentVariant)}
        type="button"
        className={clsx(twMerge(
          'flex items-center justify-center md:rounded-md bg-primary-700 w-full py-4 text-base font-medium text-white hover:bg-primary-600 focus:outline-none',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          buttonClassName
        ))}
        onClick={handleAddToCart}
      >
        Comprar
      </button>
    </div>
  )
}
