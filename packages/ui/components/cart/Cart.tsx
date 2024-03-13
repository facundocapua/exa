import { getCart } from 'api'
import CartModal from './CartModal'
import { cookies } from 'next/headers'

export default async function Cart () {
  const cartId = cookies().get('cart')?.value
  let cart

  if (cartId) {
    cart = await getCart(cartId)
  }

  return (
    <CartModal cart={cart} />
  )
}
