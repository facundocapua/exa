import React from 'react'
import { formatPrice } from '../../utils/price'

type Props = {
  amount: number;
  showPriceWithoutTaxes?: boolean;
  className?: string;
} & React.ComponentProps<'p'>

export default function Price ({ amount, className, showPriceWithoutTaxes }: Props) {
  if (!amount) return null

  return (
    <div className="flex flex-col items-start gap-y-2">
      <p suppressHydrationWarning={true} className={className}>
        {`${formatPrice(amount / 100)}`}
      </p>
      {showPriceWithoutTaxes && (
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          Precio sin impuestos {`${formatPrice(amount / 121)}`}
        </p>
      )}
    </div>
  )
}
