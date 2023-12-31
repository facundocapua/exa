'use client'

import type { Product } from 'api'
import ProductVariantOption from './ProductVariantOption'
import clsx from 'clsx'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type Props = {
  variants: Product['variants']
}

export default function ProductColorSelector ({ variants }: Props) {
  // const [currentVariant, setCurrentVariant] = useProductStore(state => [state.currentVariant, state.setCurrentVariant])
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentVariant = searchParams.get('v') ? variants?.find(variant => variant.sku === searchParams.get('v')) : null

  if (!variants || variants.length === 0) return null

  return (
    <div className="my-4">
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        Color
        {currentVariant && (<span className="text-sm text-neutral-500">: {currentVariant.color.label}</span>)}
      </h3>
      <div className="flex gap-2 flex-wrap">
        {
        variants.map(variant => (
          <button
            key={variant.sku}
            className={clsx({
              'border-2 border-neutral-300 rounded-lg hover:opacity-70 relative': true,
              'border-primary-600': variant.sku === currentVariant?.sku
            })}
            aria-label={variant.sku}
            onClick={() => {
              router.replace(`${pathname}?v=${variant.sku}`, { scroll: false })
            }}
          >
            {
              variant.stock <= 0
                ? (<hr className={clsx({
                    'border border-neutral-300 absolute top-[19px] left-[-7px] w-[55px] rotate-45': true,
                    'border-primary-600': variant.sku === currentVariant?.sku
                  })} />)
                : ''
            }
            <ProductVariantOption {...variant.color} />
          </button>
        ))
      }
      </div>
    </div>
  )
}
