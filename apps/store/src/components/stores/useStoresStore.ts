import type { Brand } from 'api'
import { create } from 'zustand'

type StoresStore = {
  brands: Array<Brand['handle']>
  setBrands: (brands: Array<Brand['handle']>) => void
}

export const useStoresStore = create<StoresStore>()((set) => ({
  brands: [],
  setBrands: (brands) => set({ brands })
}))
