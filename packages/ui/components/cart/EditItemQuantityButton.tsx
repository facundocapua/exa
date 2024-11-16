'use client'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { removeItem, updateItemQuantity } from './actions'
import LoadingDots from '../LoadingDots'
import type { CartItem } from 'api'
import { sendGAEvent } from '@next/third-parties/google'
import { extractCartItem } from '../ga/utils'

export default function EditItemQuantityButton ({
  item,
  type
}: {
  item: CartItem;
  type: 'plus' | 'minus';
}) {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <button
      aria-label={type === 'plus' ? 'Increase item quantity' : 'Reduce item quantity'}
      onClick={() => {
        startTransition(async () => {
          const newQty = type === 'plus' ? item.quantity + 1 : item.quantity - 1
          let error = null
          if (newQty === 0) {
            error = await removeItem(item.id)

            sendGAEvent('event', 'remove_from_cart', {
              currency: 'ARS',
              value: item.subtotal,
              items: [extractCartItem(item)]
            })
          } else {
            error = await updateItemQuantity({
              itemId: item.id,
              quantity: newQty
            })
          }

          if (error) {
            // Trigger the error boundary in the root error.js
            throw new Error(error.toString())
          }

          router.refresh()
        })
      }}
      disabled={isPending}
      className={clsx(
        'ease flex h-full min-w-[36px] max-w-[36px] flex-none items-center justify-center rounded-full px-2 transition-all duration-200 hover:border-neutral-800 hover:opacity-80',
        {
          'cursor-not-allowed': isPending,
          'ml-auto': type === 'minus'
        }
      )}
    >
      {isPending
        ? (
          <LoadingDots className="bg-black dark:bg-white" />
          )
        : type === 'plus'
          ? (
            <PlusIcon className="h-4 w-4 dark:text-neutral-500" />
            )
          : (
            <MinusIcon className="h-4 w-4 dark:text-neutral-500" />
            )}
    </button>
  )
}
