import { getCart } from 'api'
import CartModal from './CartModal'
import { cookies } from 'next/headers'

export default async function Cart () {
  const cartRaw = cookies().get('cart')?.value
  const cartInfo = cartRaw ? JSON.parse(cartRaw) : undefined
  let cart

  if (cartInfo) {
    cart = await getCart(cartInfo)
  }

  return (
    <CartModal cart={cart} />
  )
}
