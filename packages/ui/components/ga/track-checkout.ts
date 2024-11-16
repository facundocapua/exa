import { sendGAEvent } from '@next/third-parties/google'
import type { CartWithCheckoutStep } from 'api'
import { extractCartItem } from './utils'

export const trackBeginCheckout = (cart: CartWithCheckoutStep) => {
  const items = cart.items.map(extractCartItem)
  sendGAEvent('event', 'begin_checkout', {
    currency: 'ARS',
    value: cart.subtotal,
    items
  })
}

export const trackAddShippingInfo = (cart: CartWithCheckoutStep) => {
  const items = cart.items.map(extractCartItem)
  sendGAEvent('event', 'add_shipping_info', {
    currency: 'ARS',
    value: cart.subtotal,
    shipping_tier: 'Ground',
    items
  })
}

export const trackAddPaymentInfo = (cart: CartWithCheckoutStep) => {
  const items = cart.items.map(extractCartItem)
  sendGAEvent('event', 'add_payment_info', {
    currency: 'ARS',
    value: cart.subtotal,
    shipping_tier: 'Ground',
    payment_type: 'Credit Card',
    items
  })
}

export const trackPurchase = (cart: CartWithCheckoutStep) => {
  const items = cart.items.map(extractCartItem)
  sendGAEvent('event', 'purchase', {
    transaction_id: cart.id,
    currency: 'ARS',
    value: cart.subtotal,
    tax: cart.tax_total,
    shipping: cart.shipping_total,
    items
  })
}
