import React from 'react'
import { formatPrice } from '../../utils/price'

type Props = {
  amount: number;
  className?: string;
} & React.ComponentProps<'p'>

export default function Price ({ amount, className }: Props) {
  if (!amount) return null

  return (
    <p suppressHydrationWarning={true} className={className}>
      {`${formatPrice(amount / 100)}`}
    </p>
  )
}
