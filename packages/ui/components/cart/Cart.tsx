import { getCart } from 'api'
import CartModal from './CartModal'
import { cookies } from 'next/headers'

type Props = {
  cartIconClassName?: string
}

export default async function Cart ({ cartIconClassName }: Props) {
  const c = await cookies()
  const cartId = c.get('cart')?.value
  let cart

  if (cartId) {
    cart = await getCart(cartId)
  }

  return (
    <CartModal cart={cart} cartIconClassName={cartIconClassName} />
  )
}
