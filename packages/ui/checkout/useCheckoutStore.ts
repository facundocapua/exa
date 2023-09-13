import type { Checkout } from 'api'
import { create } from 'zustand'

type CheckoutStore = {
  email: Checkout['email']
  setEmail: (email: Checkout['email']) => void
  subscribe: Checkout['subscribe']
  setSubscribe: (subscribe: Checkout['subscribe']) => void
  shippingAddress: Checkout['shippingAddress']
  setShippingAddress: (shippingAddress: Checkout['shippingAddress']) => void
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  email: '',
  setEmail: (email) => set({ email }),
  subscribe: false,
  setSubscribe: (subscribe) => set({ subscribe }),
  shippingAddress: {},
  setShippingAddress: (shippingAddress) => set({ shippingAddress })
}))
