import type { Brand } from 'api'
import { create } from 'zustand'

type StoresStore = {
  brands: Array<Brand['slug']>
  setBrands: (brands: Array<Brand['slug']>) => void
}

export const useStoresStore = create<StoresStore>()((set) => ({
  brands: [],
  setBrands: (brands) => set({ brands })
}))
