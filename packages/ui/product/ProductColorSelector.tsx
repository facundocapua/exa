'use client'

import { Product } from "api"

type Props = {
  variants: Product['variants']
}

export default function ProductColorSelector({ variants }: Props) {
  if(!variants || variants.length === 0) return null

  return (
    <div>
      <h3 className="text-lg font-medium text-gray-900">Color</h3>
      {
        variants.map(variant => (
          <button
            key={variant.sku}
            className="inline-flex items-center justify-center w-10 h-10 border border-transparent rounded-full shadow-sm text-white bg-neutral-600 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
            aria-label={variant.sku}
            style={{ backgroundColor: variant.color.hexa }}
          >
            <span className="sr-only">{variant.sku}</span>
          </button>
        ))
      }
    </div>
  )
}