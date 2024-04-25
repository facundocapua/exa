import { addCartItem, createCart, getCart } from 'api'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const GET = async (request: Request, { params }: {params: {id: string}}) => {
  const { id } = params

  const cartId = cookies().get('cart')?.value
  let cart
  if (!cartId) {
    cart = await createCart()
    cookies().set('cart', cart.id)
  } else {
    cart = await getCart(cartId)
  }

  await addCartItem(cart.id, id, 1)
  redirect('/checkout')
}
