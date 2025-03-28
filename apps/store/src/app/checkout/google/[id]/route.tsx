import { addCartItem, createCart, getCart } from 'api'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type Props = {
  params: Promise<{id: string}>
}

export const GET = async (request: Request, { params }: Props) => {
  const { id } = await params
  const c = await cookies()
  const cartId = c.get('cart')?.value
  let cart
  if (!cartId) {
    cart = await createCart()
    c.set('cart', cart.id)
  } else {
    cart = await getCart(cartId)
  }

  await addCartItem(cart.id, id, 1)
  redirect('/checkout')
}
