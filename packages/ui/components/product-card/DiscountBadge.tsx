type Props = {
  price: number
  salePrice: number
}

export default function DiscountBadge ({ price, salePrice }: Props) {
  const discount = Math.round(((price - salePrice) / price) * 100)
  if (discount <= 0 || isNaN(discount)) return null

  return (
    <div className="absolute top-0 left-0 bg-primary-500 text-white text-xs font-medium uppercase tracking-widest rounded-tl-md rounded-br-md px-2 py-1">
      {discount}% OFF
    </div>
  )
}
