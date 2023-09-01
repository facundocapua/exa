import type { Checkout } from 'api'
import { create } from 'zustand'

type CheckoutStore = {
  email: Checkout['email']
  setEmail: (email: Checkout['email']) => void
  shippingAddress: Checkout['shippingAddress'] | null
  setShippingAddress: (shippingAddress: Checkout['shippingAddress']) => void
}

export const useCheckoutStore = create<CheckoutStore>((set) => ({
  email: '',
  setEmail: (email) => set({ email }),
  shippingAddress: null,
  setShippingAddress: (shippingAddress) => set({ shippingAddress })
}))
