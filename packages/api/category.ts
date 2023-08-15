import type { Category } from './types'

const data:Array<Category> = [
  {
    id: '1',
    name: 'Coloración',
    slug: 'coloracion',
    image: '/category/category-1.jpg',
    description: 'Coloración',
    children: [
      {
        id: '11',
        name: 'Oxidantes y Decoloración',
        slug: 'oxidantes-y-decoloracion',
        image: '/category/category-1.jpg',
        description: 'Oxidantes y Decoloración'
      } as Category,
      {
        id: '12',
        name: 'Protección/Plex',
        slug: 'proteccion-plex',
        image: '/category/category-1.jpg',
        description: 'Protección/Plex'
      } as Category,
      {
        id: '13',
        name: 'Tinturas',
        slug: 'tinturas',
        image: '/category/category-1.jpg',
        description: 'Tinturas'
      } as Category
    ]
  },
  {
    id: '2',
    name: 'Ciudado',
    slug: 'ciudado',
    image: '/category/category-2.jpg',
    description: 'Ciudado',
    children: [
      {
        id: '21',
        name: 'Aceites Y Serum',
        slug: 'aceites-y-serum',
        image: '/category/category-2.jpg',
        description: 'Aceites y Serum'
      } as Category,
      {
        id: '22',
        name: 'Acondicionador',
        slug: 'acondicionador',
        image: '/category/category-2.jpg',
        description: 'Acondicionador'
      } as Category,
      {
        id: '23',
        name: 'Máscaras Y Tratamientos',
        slug: 'mascaras-y-tratamientos',
        image: '/category/category-2.jpg',
        description: 'Máscaras Y Tratamientos'
      } as Category
    ]
  },
  {
    id: '3',
    name: 'Styling',
    slug: 'styling',
    image: '/category/category-3.jpg',
    description: 'Styling',
    children: [
      {
        id: '31',
        name: 'Aceites Y Serum',
        slug: 'aceites-y-serum',
        image: '/category/category-3.jpg',
        description: 'Aceites y Serum'
      } as Category,
      {
        id: '32',
        name: 'Acondicionador',
        slug: 'acondicionador',
        image: '/category/category-3.jpg',
        description: 'Acondicionador'
      } as Category,
      {
        id: '33',
        name: 'Máscaras Y Tratamientos',
        slug: 'mascaras-y-tratamientos',
        image: '/category/category-3.jpg',
        description: 'Máscaras Y Tratamientos'
      } as Category
    ]
  },
  {
    id: '4',
    name: 'Uñas',
    slug: 'unas',
    image: '/category/category-4.jpg',
    description: 'Uñas',
    children: [
      {
        id: '41',
        name: 'Aceites Y Serum',
        slug: 'aceites-y-serum',
        image: '/category/category-4.jpg',
        description: 'Aceites y Serum'
      } as Category,
      {
        id: '42',
        name: 'Acondicionador',
        slug: 'acondicionador',
        image: '/category/category-4.jpg',
        description: 'Acondicionador'
      } as Category,
      {
        id: '43',
        name: 'Máscaras Y Tratamientos',
        slug: 'mascaras-y-tratamientos',
        image: '/category/category-4.jpg',
        description: 'Máscaras Y Tratamientos'
      } as Category
    ]
  },
  {
    id: '5',
    name: 'Barbería',
    slug: 'barberia',
    image: '/category/category-5.jpg',
    description: 'Barbería',
    children: [
      {
        id: '51',
        name: 'Aceites Y Serum',
        slug: 'aceites-y-serum',
        image: '/category/category-5.jpg',
        description: 'Aceites y Serum'
      } as Category,
      {
        id: '52',
        name: 'Acondicionador',
        slug: 'acondicionador',
        image: '/category/category-5.jpg',
        description: 'Acondicionador'
      } as Category,
      {
        id: '53',
        name: 'Máscaras Y Tratamientos',
        slug: 'mascaras-y-tratamientos',
        image: '/category/category-5.jpg',
        description: 'Máscaras Y Tratamientos'
      } as Category
    ]
  },
  {
    id: '6',
    name: 'Electro',
    slug: 'electro',
    image: '/category/category-6.jpg',
    description: 'Electro',
    children: [
      {
        id: '61',
        name: 'Aceites Y Serum',
        slug: 'aceites-y-serum',
        image: '/category/category-6.jpg',
        description: 'Aceites y Serum'
      } as Category,
      {
        id: '62',
        name: 'Acondicionador',
        slug: 'acondicionador',
        image: '/category/category-6.jpg',
        description: 'Acondicionador'
      } as Category,
      {
        id: '63',
        name: 'Máscaras Y Tratamientos',
        slug: 'mascaras-y-tratamientos',
        image: '/category/category-6.jpg',
        description: 'Máscaras Y Tratamientos'
      } as Category
    ]
  },
  {
    id: '7',
    name: 'Herramientas',
    slug: 'herramientas',
    image: '/category/category-7.jpg',
    description: 'Herramientas',
    children: [
      {
        id: '71',
        name: 'Aceites Y Serum',
        slug: 'aceites-y-serum',
        image: '/category/category-7.jpg',
        description: 'Aceites y Serum'
      } as Category,
      {
        id: '72',
        name: 'Acondicionador',
        slug: 'acondicionador',
        image: '/category/category-7.jpg',
        description: 'Acondicionador'
      } as Category,
      {
        id: '73',
        name: 'Máscaras Y Tratamientos',
        slug: 'mascaras-y-tratamientos',
        image: '/category/category-7.jpg',
        description: 'Máscaras Y Tratamientos'
      } as Category
    ]
  }
]

export const getCategories = async (): Promise<Array<Category>> => {
  return new Promise((resolve) => {
    resolve(data)
  })
}

export const getFeaturedCategories = async (): Promise<Array<Category>> => {
  return new Promise((resolve) => {
    resolve(data.slice(0, 6))
  })
}

export const getCategory = (slug: string): Promise<Category | undefined> => {
  return new Promise((resolve) => {
    const category = data.find((category) => category.slug === slug)
    if (category) {
      resolve(category)
      return
    }

    const childCategory = data.reduce<Category | undefined>((acc, category) => {
      if (acc) {
        return acc
      }
      const res = category.children.find((item) => item.slug === slug) as Category
      if (!res) return acc

      return { ...res, parent: category }
    }, undefined)

    resolve(childCategory)
  })
}
