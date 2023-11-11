import type { Tables } from './database'

export type Category = Tables<'categories'> & {
  parent?: Category
  children?: Array<Category>
  main_menu?: {
    type?: 'text' | 'image'
    size?: string
  }
}

export type Banner = {
  id: string
  title: string
  image: string
  link: string
}

export type Brand = {
  id: string
  name: string
  slug: string
  image: string
}

export type ProductVariant = Omit<Tables<'products_variants'>, 'color'> & {
  product: Tables<'products'> | string
  images: Array<Tables<'products_variants_images'>>
  color: {
    label: string
    hexa?: string
    image?: string
  }
}

export const FILTER_TYPE = {
  RADIO: 'radio',
  RANGE: 'range'
} as const

export type Product = Tables<'products'> & {
  brand: Tables<'brands'>
  categories: Array<Tables<'categories'>>
  images: Array<Tables<'products_images'>>
  variants?: Array<ProductVariant>
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
