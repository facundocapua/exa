import { Product as MedusaProduct, ProductCategory as MedusaProductCategory, ProductVariant as MedusaProductVariant } from '@medusajs/medusa'
import type { Tables } from './database'

export type Category = MedusaProductCategory

export type Banner = {
  id: string
  title: string
  image: string
  link: string
}

export type Brand = {
  id: string
  name: string
  handle: string
  logo: string
}

export type ProductVariant = MedusaProductVariant & {
  original_price: number
  calculated_price: number
  images: MedusaProduct['images']
}

export const FILTER_TYPE = {
  RADIO: 'radio',
  RANGE: 'range'
} as const

export type Product = MedusaProduct & {
  brand: any
  price: number
  salePrice: number
  variants: Array<ProductVariant>
}

export type FilterOption = {
  name: string
  value: string | number
  count: number
}

export type Filter = {
  attribute: string
  name: string
  type: typeof FILTER_TYPE[keyof typeof FILTER_TYPE]
  options: Array<FilterOption>
}

export type CartItem = {
  sku: string
  qty: number
  price: number
  salePrice: number
  product: Product
}

export type Cart = {
  id: string
  lines: Array<CartItem>
  cost: {
    subtotal: number
    discount: number
    shipping: number
    total: number
  }
  totalQuantity: number
}

export type State = {
  id: string
  name: string
}

export type Address = {
  firstName?: string
  lastName?: string
  street?: string
  aditional?: string
  postalCode?: string
  city?: string
  state?: State
}

export type Checkout = {
  email: string
  subscribe: boolean
  shippingAddress: Address
  billingAddress: Address
}

export type Store = Tables<'stores'> & {
  hours: Record<string, { open: string; close: string }>
  brands: Array<Tables<'brands'>>
  social_networks: Record<string, string>
}
