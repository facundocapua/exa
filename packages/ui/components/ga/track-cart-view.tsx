'use client'
import type { Cart } from 'api'
import { useEffect } from 'react'
import { sendGAEvent } from '@next/third-parties/google'
import { extractCartItem } from './utils'

type Props = {
  cart: Cart
}

export const TrackCartView = ({ cart }: Props) => {
  useEffect(() => {
    const items = cart.items.map(extractCartItem)
    sendGAEvent('event', 'view_cart', {
      currency: 'ARS',
      value: cart.total,
      items
    })
  }, [cart])

  return <></>
}

export default TrackCartView
