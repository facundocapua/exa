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

export type Product = {
  id: string
  brand: Brand
  name: string
  slug: string
  images: Array<string>
  price: number
  salePrice: number
}
