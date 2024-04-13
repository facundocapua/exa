import type {
  Product as MedusaProduct,
  ProductCategory as MedusaProductCategory,
  ProductVariant as MedusaProductVariant,
  ProductCollection as MedusaProductCollection,
  Cart as MedusaCart,
  LineItem as MedusaLineItem,
  Address as MedusaAddress,
  PaymentSession as MedusaPaymentSession,
  StoreCompleteCartRes,
  Order as MedusaOrder,
  Payment as MedusaPayment
} from '@medusajs/medusa'
import type { PricedShippingOption } from '@medusajs/medusa/dist/types/pricing'

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
  is_featured: boolean
  is_active: boolean
}

export type ProductVariant = MedusaProductVariant & {
  original_price: number
  calculated_price: number
  images: MedusaProduct['images']
}

export type Collection = MedusaProductCollection

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

export type Cart = MedusaCart

export type CartWithCheckoutStep = Omit<
  Cart,
  'beforeInsert' | 'beforeUpdate' | 'afterUpdateOrLoad'
> & {
  checkout_step: 'address' | 'delivery' | 'payment'
}

export type CartItem = MedusaLineItem

export type ShippingMethod = PricedShippingOption

export type PaymentSession = MedusaPaymentSession

export type PlaceOrderResponse = StoreCompleteCartRes

export type State = {
  id: string
  name: string
}

export type Address = MedusaAddress

export interface Salon {
  id: string
  name: string
  lat?: number
  lng?: number
  is_active: boolean
  address?: string
  city?: string
  state?: string
  website?: string
  map?: string
  phone?: string
  map_link?: string
  email?: string
  created_at: string
  updated_at: string
  hours?: Record<string, { open: string; close: string }>
  brands?: Array<Brand>
  social_networks?: Record<string, string>
}

export type Order = MedusaOrder

export type Payment = MedusaPayment

export type MercadoPagoPaymentData = {
  id:number
  payment_method: {
    id: string
  }
  installments: number
  transaction_details: {
    installment_amount: number
    total_paid_amount: number
  }
  card?: {
    bin: string,
    last_four_digits:string
  }
  date_created: string
}

export type MercadoPagoPayment = Payment & {
  data: MercadoPagoPaymentData
}
