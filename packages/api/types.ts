export type Category = {
  id: string
  name: string
  slug: string
  image: string
  description: string
  children: Array<Category>
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

export const FILTER_TYPE = {
  RADIO: 'radio',
  RANGE: 'range'
} as const

export type Product = {
  id: string
  brand: Brand
  categories: Array<Category>
  name: string
  slug: string
  images: Array<string>
  price: number
  salePrice: number
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
