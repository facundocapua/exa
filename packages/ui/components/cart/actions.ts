'use server'

import { addCartItem, createCart, getCart, removeCartItem, updateCartItem } from 'api'
import { cookies } from 'next/headers'

export const addItem = async (variantId: string): Promise<String | undefined> => {
  const cartId = cookies().get('cart')?.value
  let cart
  if (!cartId) {
    cart = await createCart()
    cookies().set('cart', cart.id)
  } else {
    cart = await getCart(cartId)
  }

  try {
    await addCartItem(cart.id, variantId, 1)
  } catch (e) {
    console.log(e)
    return 'Error adding item to cart'
  }
}

export const removeItem = async (itemId: string): Promise<String | undefined> => {
  const cartId = cookies().get('cart')?.value
  if (!cartId) return 'Error removing item from cart'

  try {
    await removeCartItem(cartId, itemId)
  } catch (e) {
    return 'Error removing item from cart'
  }
}

export const updateItemQuantity = async ({
  itemId,
  quantity
}: {
  itemId: string;
  quantity: number;
}): Promise<String | undefined> => {
  const cartId = cookies().get('cart')?.value
  if (!cartId) return 'Error updating item from cart'

  try {
    await updateCartItem(cartId, itemId, quantity)
  } catch (e) {
    return 'Error updating item quantity'
  }
}
