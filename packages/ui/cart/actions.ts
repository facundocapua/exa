'use server'

import { cookies } from 'next/headers'

export const addItem = async (sku: string): Promise<String | undefined> => {
  const cartRaw = cookies().get('cart')?.value
  const cart = new Map(Object.entries(JSON.parse(cartRaw ?? '{}')))

  try {
    const qty = cart.get(sku) as number ?? 0
    cart.set(sku, qty + 1)

    cookies().set('cart', JSON.stringify(Object.fromEntries(cart)))
  } catch (e) {
    return 'Error adding item to cart'
  }
}

export const removeItem = async (sku: string): Promise<String | undefined> => {
  const cartRaw = cookies().get('cart')?.value
  const cart = new Map(Object.entries(JSON.parse(cartRaw ?? '{}')))

  try {
    cart.delete(sku)

    cookies().set('cart', JSON.stringify(Object.fromEntries(cart)))
  } catch (e) {
    return 'Error removing item from cart'
  }
}

export const updateItemQuantity = async ({
  sku,
  qty
}: {
  sku: string;
  qty: number;
}): Promise<String | undefined> => {
  const cartRaw = cookies().get('cart')?.value
  const cart = new Map(Object.entries(JSON.parse(cartRaw ?? '{}')))

  try {
    cart.set(sku, qty)

    cookies().set('cart', JSON.stringify(Object.fromEntries(cart)))
  } catch (e) {
    return 'Error updating item quantity'
  }
}
