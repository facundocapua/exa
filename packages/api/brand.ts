import type { Brand } from './types'

const data: Array<Brand> = [
  {
    id: '1',
    name: 'Gama',
    slug: 'gama',
    image: '/brand/brand-1.png'
  },
  {
    id: '2',
    name: 'Gama Professional',
    slug: 'gama-professional',
    image: '/brand/brand-2.png'
  },
  {
    id: '3',
    name: 'IQ',
    slug: 'iq',
    image: '/brand/brand-3.png'
  },
  {
    id: '4',
    name: 'GBS',
    slug: 'gbs',
    image: '/brand/brand-4.png'
  },
  {
    id: '5',
    name: 'Wella Professional',
    slug: 'wella-professional',
    image: '/brand/brand-5.png'
  },
  {
    id: '6',
    name: 'Farmavita',
    slug: 'farmavita',
    image: '/brand/brand-6.png'
  },
  {
    id: '7',
    name: 'Boffel',
    slug: 'boffel',
    image: '/brand/brand-7.png'
  },
  {
    id: '8',
    name: 'Rostok',
    slug: 'rostok',
    image: '/brand/brand-8.png'
  },
  {
    id: '9',
    name: 'Zita',
    slug: 'zita',
    image: '/brand/brand-9.png'
  },
  {
    id: '10',
    name: 'Sebastian',
    slug: 'sebastian',
    image: '/brand/brand-10.png'
  }
]

export const getBrands = async (): Promise<Array<Brand>> => {
  return new Promise((resolve) => {
    resolve(data)
  })
}

export const getBrand = async (slug: string): Promise<Brand | undefined> => {
  return new Promise((resolve) => {
    const brand = data.find((item) => item.slug === slug)
    resolve(brand)
  })
}
