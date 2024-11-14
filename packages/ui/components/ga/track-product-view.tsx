'use client'
import type { Product } from 'api'
import { useEffect } from 'react'
import { sendGAEvent } from '@next/third-parties/google'
import { extractProductInfo } from './utils'

type Props = {
  product: Product
}

export const TrackProductView = ({ product }: Props) => {
  useEffect(() => {
    sendGAEvent('event', 'view_item', {
      currency: 'ARS',
      value: product.salePrice,
      items: [
        extractProductInfo(product)
      ]
    })
  }, [product])

  return <></>
}

export default TrackProductView
