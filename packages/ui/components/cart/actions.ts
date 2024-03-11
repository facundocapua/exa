'use server'

import { cookies } from 'next/headers'

export const addItem = async (variantId: string): Promise<String | undefined> => {
  const cartRaw = cookies().get('cart')?.value
  const cart = new Map(Object.entries(JSON.parse(cartRaw ?? '{}')))

  try {
    const qty = cart.get(variantId) as number ?? 0
    cart.set(variantId, qty + 1)

    cookies().set('cart', JSON.stringify(Object.fromEntries(cart)))
  } catch (e) {
    return 'Error adding item to cart'
  }
}

export const removeItem = async (variantId: string): Promise<String | undefined> => {
  const cartRaw = cookies().get('cart')?.value
  const cart = new Map(Object.entries(JSON.parse(cartRaw ?? '{}')))

  try {
    cart.delete(variantId)

    cookies().set('cart', JSON.stringify(Object.fromEntries(cart)))
  } catch (e) {
    return 'Error removing item from cart'
  }
}

export const updateItemQuantity = async ({
  variantId,
  qty
}: {
  variantId: string;
  qty: number;
}): Promise<String | undefined> => {
  const cartRaw = cookies().get('cart')?.value
  const cart = new Map(Object.entries(JSON.parse(cartRaw ?? '{}')))

  try {
    cart.set(variantId, qty)

    cookies().set('cart', JSON.stringify(Object.fromEntries(cart)))
  } catch (e) {
    return 'Error updating item quantity'
  }
}
