import type { ProductVariant } from 'api'
import { create } from 'zustand'

type ProductStore = {
  currentVariant: ProductVariant | null
  setCurrentVariant: (variant: ProductStore['currentVariant']) => void
}

export const useProductStore = create<ProductStore>()((set) => ({
  currentVariant: null,
  setCurrentVariant: (currentVariant) => set({ currentVariant })
}))
