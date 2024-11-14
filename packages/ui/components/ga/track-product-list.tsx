'use client'
import type { Product } from 'api'
import { useEffect } from 'react'
import { sendGAEvent } from '@next/third-parties/google'
import { extractProductInfo } from './utils'

type Props = {
  products: Product[]
  listId?: string
}

export const TrackProductList = ({ products, listId }: Props) => {
  useEffect(() => {
    const items = products.map(extractProductInfo)
    sendGAEvent('event', 'view_item', {
      currency: 'ARS',
      // value: product.salePrice,
      items: items.map((item) => ({
        ...item,
        item_list_id: listId
      }))
    })
  }, [products])

  return <></>
}

export default TrackProductList
