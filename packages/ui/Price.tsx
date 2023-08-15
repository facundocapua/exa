import clsx from 'clsx'
import React from 'react'

type Props = {
  amount: number;
  className?: string;
  currencyCode?: string;
} & React.ComponentProps<'p'>

export default function Price ({ amount, className, currencyCode = 'ARS' }: Props) {
  return (
    <p suppressHydrationWarning={true} className={className}>
      {`${new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(amount)}`}
    </p>
  )
}
