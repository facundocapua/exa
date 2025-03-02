'use server'

import { cookies } from 'next/headers'
import type { Cart, PlaceOrderResponse, StorePostCartsCartReq } from 'api'
import { addDiscountCode, addShippingMethod, completeCart, removeDiscountCode, setPaymentSession, updateCart } from 'api'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

export async function setAddresses (currentState: unknown, formData: FormData) {
  // await new Promise(r => setTimeout(r, 2000))
  if (!formData) return 'No form data received'
  const c = await cookies()
  const cartId = c.get('cart')?.value

  if (!cartId) return { message: 'No cartId cookie found' }

  const data = {
    shipping_address: {
      first_name: formData.get('shipping_address.first_name'),
      last_name: formData.get('shipping_address.last_name'),
      address_1: formData.get('shipping_address.address_1'),
      address_2: '',
      company: formData.get('shipping_address.company'),
      postal_code: formData.get('shipping_address.postal_code'),
      city: formData.get('shipping_address.city'),
      country_code: formData.get('shipping_address.country_code'),
      province: formData.get('shipping_address.province'),
      phone: formData.get('shipping_address.phone')
    },
    email: formData.get('email')
  } as StorePostCartsCartReq

  const sameAsBilling = formData.get('same_as_billing')

  if (sameAsBilling === 'on') data.billing_address = data.shipping_address

  if (sameAsBilling !== 'on') {
    data.billing_address = {
      first_name: formData.get('billing_address.first_name'),
      last_name: formData.get('billing_address.last_name'),
      address_1: formData.get('billing_address.address_1'),
      address_2: '',
      company: formData.get('billing_address.company'),
      postal_code: formData.get('billing_address.postal_code'),
      city: formData.get('billing_address.city'),
      country_code: formData.get('billing_address.country_code'),
      province: formData.get('billing_address.province'),
      phone: formData.get('billing_address.phone')
    } as StorePostCartsCartReq
  }

  try {
    await updateCart(cartId, data)
    revalidateTag('cart')
  } catch (error: any) {
    return error.toString()
  }

  redirect('/checkout?step=delivery')
}

export async function setShippingMethod (shippingMethodId: string) {
  const c = await cookies()
  const cartId = c.get('cart')?.value

  if (!cartId) return { message: 'No cartId cookie found' }

  try {
    await addShippingMethod(cartId, shippingMethodId)
    revalidateTag('cart')
  } catch (error: any) {
    return error.toString()
  }
}

export async function setPaymentMethod (providerId: string): Promise<Cart> {
  const c = await cookies()
  const cartId = c.get('cart')?.value

  if (!cartId) throw new Error('No cartId cookie found')

  const cart = await setPaymentSession(cartId, providerId)
  const couponCode = 'BANKTRANSFER'
  if (providerId === 'banktransfer') {
    await addDiscountCode(cartId, couponCode)
  } else {
    await removeDiscountCode(cartId, couponCode)
  }

  revalidateTag('cart')

  return cart
}

export async function placeOrder (): Promise<PlaceOrderResponse> {
  const c = await cookies()
  const cartId = c.get('cart')?.value

  if (!cartId) throw new Error('No cartId cookie found')

  const cart = await completeCart(cartId)
  revalidateTag('cart')

  c.set('cart', '', { maxAge: -1 })
  if (cart?.type === 'order') {
    redirect(`/order/confirmed/${cart?.data.id}`)
  }

  if (cart?.type === 'cart') {
    redirect(`/mercadopago/${cart?.data.id}`)
  }

  return cart
}
